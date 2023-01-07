package com.ytu.it.smc.JavaWeb_02.Servlet;

import com.ytu.it.smc.JavaWeb_02.Bean.Watches;
import com.ytu.it.smc.JavaWeb_02.DAO.WatchDataDao;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


import java.io.IOException;
import java.util.ArrayList;
import java.util.List;



@WebServlet(name = "SearchServlet", urlPatterns = "/SearchServlet")
public class SearchServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 当前页码
        int currPage = 1;
        // 判断传递页码是否有效
        if(request.getParameter("page") != null){
            // 对当前页码赋值
            currPage = Integer.parseInt(request.getParameter("page"));
        }
        //实例化查询条件
        String name = request.getParameter("search");

        // 实例化ProductDao
        WatchDataDao dao = new WatchDataDao();
        // 查询所有商品信息
        List<Watches> list = dao.getall();
        List<Watches> list1 = new ArrayList<Watches>();
        //将不符合查找标准的删除

        int j = list.size();
        for(int i = 0;i < j;i++)
        {
            Watches p = list.get(i);
            System.out.println("列表大小为："+list.size());

            if(p.getName().contains(name)) {
            //if (name.contains(p.getName())==false){

                System.out.println(p.getName()+p.getName().indexOf(name)+"A111111");
                list1.add(list.get(i));
                //System.out.println(p.getManufacturer()+manufacturer+"1");
                //continue;
            }
            else
            {
                System.out.println(p.getName()+p.getName().indexOf(name)+"B222222");
            }

            //sListIterator.remove();
            //System.out.println(p.getName());
        }
        // 将list放置到request之中
        request.setAttribute("list", list1);
//        // 总页数
//        int pages ;
//        // 查询总记录数
//        int count = list1.size();
//        // 计算总页数
//        if(count % Watches.PAGE_SIZE == 0){
//            // 对总页数赋值
//            pages = count / Watches.PAGE_SIZE;
//        }else{
//            // 对总页数赋值
//            pages = count / Watches.PAGE_SIZE + 1;
//        }
//        // 实例化StringBuffer
//        StringBuffer sb = new StringBuffer();
//        // 通过循环构建分页条
//        for(int i=1; i <= pages; i++){
//            // 判断是否为当前页
//            if(i == currPage){
//                // 构建分页条
//                sb.append("��" + i + "��");
//            }else{
//                // 构建分页条
//                sb.append("<a href='SearchServlet?page=" + i + "'>" + i + "</a>");
//            }
//            // 构建分页条
//            sb.append("　");
//        }
//        // 将分页条的字符串放置到request之中
//        request.setAttribute("bar", sb.toString());
        // 转发到product_list.jsp页面
        request.getRequestDispatcher("shop.jsp").forward(request, response);
    }
}
