package com.ytu.it.smc.JavaWeb_02.Servlet;

import com.oracle.wls.shaded.org.apache.bcel.generic.IF_ACMPEQ;
import com.ytu.it.smc.JavaWeb_02.Bean.Users;
import com.ytu.it.smc.JavaWeb_02.DAO.UserDataDao;
import jakarta.mail.MessagingException;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.List;
import java.util.Objects;

@WebServlet(name = "SubscribeServlet", urlPatterns = "/SubscribeServlet")
public class SubscribeServlet extends HttpServlet {

    private String currentUser;
    private boolean isSend;
    private final UserDataDao userDataDao = new UserDataDao();


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html; charset = UTF-8");

        String temp = (String) request.getSession().getAttribute("name");
        setCurrentUser(Objects.requireNonNullElse(temp, ""));
        if (getSubscribeState(getCurrentUser()) == 0) {
            try {
                setSend(Mail.sendMail(getCurrentUser()) && userDataDao.setSubscribeState(getCurrentUser()));
            } catch (GeneralSecurityException | MessagingException e) {
                e.printStackTrace();
            }

            if (isSend()) {
                response.getWriter().write("<script> alert('订阅成功！'); </script>");

            } else {
                response.getWriter().write("<script> alert('请重试'); </script>");
            }
        } else {
            response.getWriter().write("<script> alert('请勿重复订阅'); </script>");
        }
    }

    public void setCurrentUser(String currentUser) {
        this.currentUser = currentUser;
    }

    public void setSend(boolean send) {
        isSend = send;
    }

    public String getCurrentUser() {
        return currentUser;
    }

    public boolean isSend() {
        return isSend;
    }

    public int getSubscribeState(String name) {
        List<Users> usersList = userDataDao.getUserData();
        int state = 3;
        for (Users userBean : usersList) {
            if (userBean.getUsername().equals(name)) {
                state = userBean.getSubscribeState();
            }
        }
        return state;
    }
}
