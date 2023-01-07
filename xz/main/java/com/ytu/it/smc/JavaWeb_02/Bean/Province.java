package com.ytu.it.smc.JavaWeb_02.Bean;

import java.util.HashMap;

public class Province {

    private HashMap<String, String> hashMap = new HashMap<>();

    public Province() {
        hashMap.put("0", "请选择");
        hashMap.put("1", "北京");
        hashMap.put("2", "上海");
        hashMap.put("3", "天津");
        hashMap.put("4", "重庆");
        hashMap.put("5", "黑龙江");
        hashMap.put("6", "吉林");
        hashMap.put("7", "辽宁");
        hashMap.put("8", "内蒙古");
        hashMap.put("9", "河北");
        hashMap.put("10", "河南");
        hashMap.put("11", "山东");
    }

    public String getProvince(String id) {
        return hashMap.get(id);
    }
}
