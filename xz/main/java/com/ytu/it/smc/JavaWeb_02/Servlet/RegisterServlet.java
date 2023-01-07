package com.ytu.it.smc.JavaWeb_02.Servlet;

import com.alibaba.druid.filter.config.ConfigTools;
import com.ytu.it.smc.JavaWeb_02.DAO.UserDataDao;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.commons.validator.routines.EmailValidator;
import java.io.IOException;

@WebServlet(name = "RegisterServlet", urlPatterns = "/RegisterServlet")
public class RegisterServlet extends HttpServlet {

    private String n_username;
    private String n_password;
    private String VerificationCode;

    private final UserDataDao userDataDao = new UserDataDao();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html; charset = utf-8");

        setN_username(req.getParameter("n_user").trim());
        try {
            setN_password(ConfigTools.encrypt(req.getParameter("n_password").trim()));
        } catch (Exception e) {
            e.printStackTrace();
        }

        setVerificationCode(req.getParameter("VerificationCode").toLowerCase());//接收客户端浏览器提交上来的验证码

        String serverCheckcode = req.getSession().getAttribute("checkcode").toString().toLowerCase();//从服务器端的session中取出验证码
        if (getVerificationCode().equals(serverCheckcode)) {//将客户端验证码和服务器端验证比较，如果相等，则表示验证通过
            if (EmailValidator.getInstance().isValid(getN_username())) {
                if (userDataDao.insert(getN_username(), getN_password())) {
                    resp.getWriter().write("<script> alert('注册成功！'); </script>");
                    resp.getWriter().flush();
                } else {
                    resp.getWriter().write("<script> alert('注册失败！'); </script>");
                }
            } else {
                resp.getWriter().write("<script> alert('请输入正确的邮箱地址！'); </script>");
            }
        }else {
            resp.getWriter().write("<script> alert('验证码错误！'); </script>");
        }
    }

    public String getN_username() {
        return n_username;
    }

    public void setN_username(String n_username) {
        this.n_username = n_username;
    }

    public String getN_password() {
        return n_password;
    }

    public void setN_password(String n_password) {
        this.n_password = n_password;
    }

    public String getVerificationCode() {
        return VerificationCode;
    }

    public void setVerificationCode(String verificationCode) {
        VerificationCode = verificationCode;
    }


}
