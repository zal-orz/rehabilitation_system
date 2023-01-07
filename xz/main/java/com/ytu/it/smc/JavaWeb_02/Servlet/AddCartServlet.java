package com.ytu.it.smc.JavaWeb_02.Servlet;

import com.ytu.it.smc.JavaWeb_02.Bean.Watches;
import com.ytu.it.smc.JavaWeb_02.DAO.CartDataDao;
import com.ytu.it.smc.JavaWeb_02.DAO.WatchDataDao;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


import java.io.IOException;

@WebServlet(name = "AddCartServlet", urlPatterns = "/AddCartServlet")
public class AddCartServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        int id = Integer.parseInt(req.getParameter("id"));
        WatchDataDao watchDataDao = new WatchDataDao();
        Watches watches = watchDataDao.getone(id);
        String username = (String) req.getSession().getAttribute("name");
        CartDataDao cartDataDao = new CartDataDao();
        cartDataDao.insert(watches, username);
        resp.getWriter().write("<script> alert('添加到购物车成功！'); </script>");
        req.getRequestDispatcher("ShopServlet").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doPost(req, resp);
    }
}
