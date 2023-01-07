package com.ytu.it.smc.JavaWeb_02.Bean;

import java.util.HashMap;

public class City {
    HashMap<String, String> hashMap = new HashMap<>();
    public City() {
        hashMap.put("beijing","北京");
        hashMap.put("shanghai","上海");
        hashMap.put("tianjin","天津");
        hashMap.put("chongqing","重庆");
        hashMap.put("haerbin","哈尔滨");
        hashMap.put("qiqihaer","齐齐哈尔");
        hashMap.put("mudanjiang","牡丹江");
        hashMap.put("daqing","大庆");
        hashMap.put("yichun","伊春");
        hashMap.put("cahngchun","长春");
        hashMap.put("yanbian","延边");
        hashMap.put("jilin","吉林");
        hashMap.put("baishan","白山");
        hashMap.put("baicheng","白城");
        hashMap.put("shenyang","沈阳");
        hashMap.put("dalian","大连");
        hashMap.put("huludao","葫芦岛");
        hashMap.put("lvshun","旅顺");
        hashMap.put("benxi","本溪");
        hashMap.put("huhehaote","呼和浩特");
        hashMap.put("hulunbeier","呼伦贝尔");
        hashMap.put("xilinhaote","锡林浩特");
        hashMap.put("baotou","包头");
        hashMap.put("chifeng","赤峰");
        hashMap.put("shijiazhuang","石家庄");
        hashMap.put("tangshan","唐山");
        hashMap.put("zhangjiakou","张家口");
        hashMap.put("langfang","廊坊");
        hashMap.put("xingtai","邢台");
        hashMap.put("zhengzhou","郑州");
        hashMap.put("kaifeng","开封");
        hashMap.put("luoyang","洛阳");
        hashMap.put("pingdingshan","平顶山");
        hashMap.put("jiaozuo","焦作");
        hashMap.put("jinan","济南");
        hashMap.put("qingdao","青岛");
        hashMap.put("zibo","淄博");
        hashMap.put("weihai","威海");
        hashMap.put("yantai","烟台");
        hashMap.put("weifang","潍坊");
    }

    public String getCity(String id) {
        return hashMap.get(id);
    }
}
