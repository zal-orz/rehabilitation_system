package com.ytu.it.smc.JavaWeb_02.DAO;

import com.ytu.it.smc.JavaWeb_02.Bean.Users;
import org.apache.commons.validator.routines.EmailValidator;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UserDataDao {

    private PreparedStatement preparedStatement;
    private Connection con;
    private Statement state;
    private ResultSet rs;
    private List<Users> result = new ArrayList<>();

    public List<Users> getUserData() {
        try {
            con = ConnectionUtils.getConnection();
            state = con.createStatement();
            rs = state.executeQuery("SELECT * FROM Users");
            while (rs.next()) {
                Users users = new Users();
                users.setUsername(rs.getString("Username"));
                users.setPassword(rs.getString("Password"));
                users.setSubscribeState(rs.getInt("SubscribeState"));
                result.add(users);
            }
            rs.close();
            state.close();
            con.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return result;
    }

    public boolean insert(String u, String p) {
        try {
            con = ConnectionUtils.getConnection();
            preparedStatement = con.prepareStatement("INSERT INTO `Users` VALUES(?, ?, 0)");
            preparedStatement.setString(1, u);
            preparedStatement.setString(2, p);
            preparedStatement.executeUpdate();
            preparedStatement.close();
            con.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return true;
    }

    //Ajax判断用户名合法性
    public boolean isUserNameIllegal(String name) {
        boolean flag = false;
        try {
            con = ConnectionUtils.getConnection();
            preparedStatement = con.prepareStatement("SELECT * FROM Users WHERE Username = ?");
            preparedStatement.setString(1, name);
            rs = preparedStatement.executeQuery();
            if (!rs.next() && EmailValidator.getInstance().isValid(name)) {
                flag = true;
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        System.out.println(flag);
        return flag;
    }

    public boolean setSubscribeState(String name) {
        try {
            con = ConnectionUtils.getConnection();
            preparedStatement = con.prepareStatement("UPDATE Users SET SubscribeState = 1 WHERE Username = ?");
            preparedStatement.setString(1, name);
            preparedStatement.executeUpdate();
            preparedStatement.close();
            con.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return true;
    }
}
