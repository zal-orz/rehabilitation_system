package com.ytu.it.smc.JavaWeb_02.Servlet;

import com.ytu.it.smc.JavaWeb_02.DAO.CartDataDao;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet(name = "DeleteCartServlet", urlPatterns = "/DeleteCartServlet")
public class DeleteCartServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        int id = Integer.parseInt(req.getParameter("id"));
        CartDataDao cartDataDao = new CartDataDao();
        cartDataDao.delete(id);
        resp.getWriter().write("<script> alert('删除成功！'); </script>");
        req.getRequestDispatcher("CheckCartServlet").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doPost(req, resp);
    }
}
