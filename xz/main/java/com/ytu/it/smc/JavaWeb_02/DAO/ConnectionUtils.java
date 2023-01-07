package com.ytu.it.smc.JavaWeb_02.DAO;

import com.alibaba.druid.filter.config.ConfigTools;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionUtils {
    private static String URL;
    private static String USER;
    private static String PASSWORD;

    static {
        try {
            PropertiesUtils.loadFile("jdbc.properties");
        } catch (Exception e) {
            e.printStackTrace();
        }
        try {
            setURL(ConfigTools.decrypt(PropertiesUtils.getPropertyValue("URL")));
            setUSER(ConfigTools.decrypt(PropertiesUtils.getPropertyValue("USER")));
            setPASSWORD(ConfigTools.decrypt(PropertiesUtils.getPropertyValue("PASSWORD")));
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 取得连接的工具方法
     * @return
     */
    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(getURL(), getUSER(), getPASSWORD());
    }

    public static String getURL() {
        return URL;
    }

    public static void setURL(String URL) {
        ConnectionUtils.URL = URL;
    }

    public static String getUSER() {
        return USER;
    }

    public static void setUSER(String USER) {
        ConnectionUtils.USER = USER;
    }

    public static String getPASSWORD() {
        return PASSWORD;
    }

    public static void setPASSWORD(String PASSWORD) {
        ConnectionUtils.PASSWORD = PASSWORD;
    }
}
