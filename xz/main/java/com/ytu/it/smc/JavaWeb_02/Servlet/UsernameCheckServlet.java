package com.ytu.it.smc.JavaWeb_02.Servlet;

import com.ytu.it.smc.JavaWeb_02.DAO.UserDataDao;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.Serial;
import java.nio.charset.StandardCharsets;

@WebServlet(name = "UsernameCheckServlet", urlPatterns = "/UsernameCheckServlet")
public class UsernameCheckServlet extends HttpServlet {

    @Serial
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        String name = request.getParameter("username");
        UserDataDao userDataDao = new UserDataDao();
        boolean isExist = userDataDao.isUserNameIllegal(name);
        out.print(isExist);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
