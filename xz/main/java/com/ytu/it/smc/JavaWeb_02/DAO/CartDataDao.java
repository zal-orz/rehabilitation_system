package com.ytu.it.smc.JavaWeb_02.DAO;


import com.ytu.it.smc.JavaWeb_02.Bean.Cart;
import com.ytu.it.smc.JavaWeb_02.Bean.Watches;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

//import org.apache.commons.validator.routines.EmailValidator;

public class CartDataDao {

    private PreparedStatement preparedStatement;
    private Connection con;
    private Statement state;
    private ResultSet rs;
    private List<Cart> result = new ArrayList<>();

    public CartDataDao() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
    //获得所有数据
    public List<Cart> getall(String username) {
        List<Cart> list = new ArrayList<Cart>();
        try {
            con = ConnectionUtils.getConnection();
            state = con.createStatement();
            rs = state.executeQuery("SELECT * FROM Cart WHERE user = " + username);
            while (rs.next()) {
                Cart cart = new Cart();
                cart = setSingleOne(cart, rs);
                list.add(cart);
            }
            rs.close();
            state.close();
            con.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return list;
    }
    //根据id获得一条记录
    public Cart getone(int id, String username) {
        Cart watches = new Cart();
        try {
            con = ConnectionUtils.getConnection();
            state = con.createStatement();
            rs = state.executeQuery("select * from Cart where id =" + id + " AND user =" + username);
            rs.next();
            watches = setSingleOne(watches, rs);
            // 关闭ResultSet
            rs.close();
            state.close();
            // 关闭Connection
            con.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return watches;
    }
    public List<Cart> getbypage(int page,String username){
        List<Cart> list = new ArrayList<Cart>();
        try {
            con = ConnectionUtils.getConnection();
            preparedStatement = con.prepareStatement("SELECT * FROM Cart WHERE user = ? ORDER BY id DESC LIMIT ?, ?");
            preparedStatement.setString(1, username);
            preparedStatement.setInt(2, (page - 1) * Cart.PAGE_SIZE);
            // 对SQL语句中的第2个参数赋值
            preparedStatement.setInt(3, Cart.PAGE_SIZE);
            // 执行查询操作
            rs = preparedStatement.executeQuery();
            while (rs.next()) {
                Cart cart = new Cart();
                cart = setSingleOne(cart, rs);
                list.add(cart);
            }
            rs.close();
            preparedStatement.close();
            con.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return list;
    }
    //返回共有多少条记录
    public int getCount(String username){
        // 总记录数
        int count = 0;
        try {
            con = ConnectionUtils.getConnection();
//            state = con.createStatement();
            preparedStatement = con.prepareStatement("SELECT COUNT(*) FROM Cart WHERE user = ?");
            preparedStatement.setString(1, username);
            rs = preparedStatement.executeQuery();
//            rs = state.executeQuery("select count(*) from Cart WHERE user = ?" + username);
            if (rs.next()){
                // 对总记录数赋值
                count = rs.getInt(1);
            }
            // 关闭ResultSet
            rs.close();
            preparedStatement.close();
            // 关闭Connection
            con.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        // 返回总记录数
        return count;
    }
    private Cart setSingleOne(Cart cart, ResultSet rs) throws SQLException {
        cart.setId(rs.getLong("id"));
        cart.setImage(rs.getString("image"));
        cart.setName(rs.getString("name"));
        cart.setPrice(rs.getDouble("price"));
        cart.setUser(rs.getString("user"));
        return cart;
    }

    public boolean insert(Watches watches, String username) {
        try {
            con = ConnectionUtils.getConnection();
            preparedStatement = con.prepareStatement("INSERT INTO Cart VALUES(DEFAULT, ?, ?, ?, ?)");
            preparedStatement.setString(1, watches.getPicOrig());
            preparedStatement.setString(2, watches.getName());
            preparedStatement.setDouble(3, watches.getPrice());
            preparedStatement.setString(4, username);
            preparedStatement.execute();
            preparedStatement.close();
            con.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return true;
    }

    public boolean delete(int id) {
        try {
            con = ConnectionUtils.getConnection();
            preparedStatement = con.prepareStatement("DELETE FROM Cart WHERE id = ? ");
            preparedStatement.setInt(1, id);
            preparedStatement.execute();
            preparedStatement.close();
            preparedStatement.close();
            con.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return true;
    }

    public double gettotalprice(String username){
        Double totalprice = 0.0;

        try {
            con = ConnectionUtils.getConnection();
//            state = con.createStatement();
            preparedStatement = con.prepareStatement("SELECT * FROM Cart WHERE user = ?");
//            rs = state.executeQuery("SELECT * FROM Cart WHERE user = " + username);
            preparedStatement.setString(1, username);
            rs = preparedStatement.executeQuery();
            while (rs.next()) {
                Cart cart = new Cart();
                cart = setSingleOne(cart, rs);
                totalprice += cart.getPrice();
            }
            rs.close();
            preparedStatement.close();
            con.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return totalprice;
    }
}
