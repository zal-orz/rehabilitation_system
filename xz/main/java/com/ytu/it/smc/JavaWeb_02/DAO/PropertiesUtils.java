package com.ytu.it.smc.JavaWeb_02.DAO;

import java.io.IOException;
import java.util.Properties;

public class PropertiesUtils {
    static Properties properties = new Properties();

    /**
     * @param filename: 需要加载的properties文件，文件需要放在src根目录下
     * @return 是否加载成功
     */
    public static boolean loadFile(String filename) {
        try {
            properties.load(PropertiesUtils.class.getClassLoader().getResourceAsStream(filename));
        } catch (IOException exception) {
            exception.printStackTrace();
            return false;
        }
        return true;
    }

    /**
     * 根据KEY取回相应的value
     * @param key
     * @return
     */
    public static String getPropertyValue(String key) {
        return properties.getProperty(key);
    }
}
