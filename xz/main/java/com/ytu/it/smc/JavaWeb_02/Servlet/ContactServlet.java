package com.ytu.it.smc.JavaWeb_02.Servlet;

import com.ytu.it.smc.JavaWeb_02.Bean.City;
import com.ytu.it.smc.JavaWeb_02.Bean.Province;
import jakarta.mail.MessagingException;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import org.apache.commons.validator.routines.EmailValidator;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Objects;

@WebServlet(name = "ContactServlet", urlPatterns = "/ContactServlet")
public class ContactServlet extends HttpServlet {

    private String name;
    private String email;
    private String require;
    private String provinceName;
    private String cityName;
    private boolean isSend;
    private final Province province = new Province();
    private final City city = new City();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }



    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html; charset = UTF-8");

        String temp_province = request.getParameter("province");
        String temp_city = request.getParameter("city");
        setProvinceName(province.getProvince(temp_province));
        setCityName(city.getCity(temp_city));
        String temp_con_email = request.getParameter("contact_email");        //获取用户Email
        if (EmailValidator.getInstance().isValid(temp_con_email)) {
            String temp_con_name = request.getParameter("contact_name");        //获取用户姓名
            String temp_con_require = request.getParameter("contact_message");        //获取用户反馈

            setName(Objects.requireNonNullElse(temp_con_name, ""));
            setEmail(Objects.requireNonNullElse(temp_con_email, ""));
            setRequire(Objects.requireNonNullElse(temp_con_require, ""));

            try {
                setSend(Mail.sendMail(getName(), getEmail(), getRequire(), getProvinceName(), getCityName()));
            } catch (GeneralSecurityException | MessagingException e) {
                e.printStackTrace();
            }

            if (isSend()) {
                response.getWriter().write("<script> alert('发送成功！客服稍后会通过邮件联系。'); </script>");
            } else {
                response.getWriter().write("<script> alert('请重试'); </script>");
            }
        } else {
            response.getWriter().write("<script> alert('邮箱地址不正确'); </script>");
        }
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRequire() {
        return require;
    }

    public void setRequire(String require) {
        this.require = require;
    }

    public boolean isSend() {
        return isSend;
    }

    public void setSend(boolean send) {
        isSend = send;
    }
    public String getProvinceName() {
        return provinceName;
    }

    public void setProvinceName(String provinceName) {
        this.provinceName = provinceName;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }
}
