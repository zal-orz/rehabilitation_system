package com.ytu.it.smc.JavaWeb_02.Servlet;

import com.alibaba.druid.filter.config.ConfigTools;
import com.ytu.it.smc.JavaWeb_02.Bean.Users;
import com.ytu.it.smc.JavaWeb_02.DAO.UserDataDao;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet(name = "LoginServlet", urlPatterns = "/LoginServlet")
public class LoginServlet extends HttpServlet {
    private String username;
    private String password;
    private final UserDataDao userDataDao = new UserDataDao();
    boolean flag = true;


    /*@Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/xml; charset = UTF-8");
        PrintWriter out = resp.getWriter();

        boolean tag = userDataDao.isUserNameIllegal(getUsername());

        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("<response>");
        stringBuilder.append("<a>");
        if (tag) {
            stringBuilder.append("1");
        } else {
            stringBuilder.append("0");
        }
        stringBuilder.append("</a>");
        stringBuilder.append("</response>");
        String xml = stringBuilder.toString();
        out.write(xml);
        out.flush();
        out.close();
    }*/

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html; charset = UTF-8");

        setUsername(req.getParameter("username").trim());
        try {
            setPassword(ConfigTools.encrypt(req.getParameter("password")).trim());
        } catch (Exception e) {
            e.printStackTrace();
        }

        List<Users> usersList = userDataDao.getUserData();

        if (username.equals("")) {
            resp.getWriter().write("<script> alert('用户名不能为空！'); </script>");
        } else if (password.equals("")) {
            resp.getWriter().write("<script> alert('请输入密码！'); </script>");
        } else {
            for (Users userBean : usersList) {
                if (username.equals(userBean.getUsername())) {
                    if (password.equals(userBean.getPassword())) {
                        resp.getWriter().write("<script> alert('登录成功！'); window.top.location = 'index.jsp'; </script>");
                        req.getSession().setAttribute("name",userBean.getUsername());
                        resp.getWriter().flush();
                    } else {
                        resp.getWriter().write("<script> alert('密码错误！'); </script>");
                    }
                    flag = true;
                    break;
                }
                flag = false;
            }
            if (!flag) {
                resp.getWriter().write("<script> alert('用户不存在，请先注册！'); </script>");
            }
        }
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }
}
