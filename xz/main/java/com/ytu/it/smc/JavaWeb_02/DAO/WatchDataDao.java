package com.ytu.it.smc.JavaWeb_02.DAO;


import com.ytu.it.smc.JavaWeb_02.Bean.Watches;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

//import org.apache.commons.validator.routines.EmailValidator;

public class WatchDataDao {

    private PreparedStatement preparedStatement;
    private Connection con;
    private Statement state;
    private ResultSet rs;
    private List<Watches> result = new ArrayList<>();

    public WatchDataDao() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
    //获得所有数据
    public List<Watches> getall() {
        List<Watches> list = new ArrayList<Watches>();
        try {
            con = ConnectionUtils.getConnection();
            state = con.createStatement();
            rs = state.executeQuery("SELECT * FROM Watches");
            while (rs.next()) {
                Watches watches = new Watches();
                watches = setSingleOne(watches, rs);
                list.add(watches);
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
    public Watches getone(int id) {
        Watches watches = new Watches();
        try {
            con = ConnectionUtils.getConnection();
            state = con.createStatement();
            rs = state.executeQuery("select * from Watches where id =" + id);
            rs.next();
            watches = setSingleOne(watches, rs);
            // 关闭ResultSet
            rs.close();
            // 关闭Connection
            con.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return watches;
    }
    public List<Watches> getbypage(int page){
        List<Watches> list = new ArrayList<Watches>();
        try {
            con = ConnectionUtils.getConnection();
            PreparedStatement ps = con.prepareStatement("select * from Watches order by id desc limit ?,?");
            ps.setInt(1, (page - 1) * Watches.PAGE_SIZE);
            // 对SQL语句中的第2个参数赋值
            ps.setInt(2, Watches.PAGE_SIZE);
            // 执行查询操作
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Watches watches = new Watches();
                watches = setSingleOne(watches, rs);
                list.add(watches);
            }
            rs.close();
            ps.close();
            con.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return list;
    }
    //返回共有多少条记录
    public int getCount(){
        // 总记录数
        int count = 0;
        try {
            con = ConnectionUtils.getConnection();
            state = con.createStatement();
            rs = state.executeQuery("select count(*) from Watches");
            if(rs.next()){
                // 对总记录数赋值
                count = rs.getInt(1);
            }
            // 关闭ResultSet
            rs.close();
            // 关闭Connection
            con.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        // 返回总记录数
        return count;
    }
    private Watches setSingleOne(Watches watches, ResultSet rs) throws SQLException {
        watches.setName(rs.getString("name"));
        watches.setPrice(rs.getDouble("price"));
        watches.setPicOrig(rs.getString("pic_orig"));
        watches.setPicAfter(rs.getString("pic_after"));
        watches.setBrand(rs.getString("brand"));
        watches.setId(rs.getLong("id"));
        watches.setAvailability(rs.getString("Availability"));
        watches.setStockNum(rs.getLong("StockNum"));
        watches.setDescription(rs.getString("description"));
        return watches;
    }

//    public boolean insert(String u, String p) {
//        try {
//            con = ConnectionUtils.getConnection();
//            preparedStatement = con.prepareStatement("INSERT INTO `Users` VALUES(?, ?, 0)");
//            preparedStatement.setString(1, u);
//            preparedStatement.setString(2, p);
//            preparedStatement.executeUpdate();
//            preparedStatement.close();
//            con.close();
//        } catch (SQLException throwables) {
//            throwables.printStackTrace();
//        }
//        return true;
//    }
}
