package com.ytu.it.smc.JavaWeb_02.Servlet;

import com.sun.mail.util.MailSSLSocketFactory;
import jakarta.mail.*;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;

import java.security.GeneralSecurityException;
import java.util.Properties;

public class Mail {
    public static boolean sendMail(String mail) throws GeneralSecurityException, MessagingException {
        //props和authenticator参数
        Properties properties = new Properties();
        properties.setProperty("mail.host", "smtp.163.com");
        properties.setProperty("mail.smtp.auth", "true");

        //163邮箱的SSL加密。
        MailSSLSocketFactory mailSSLSocketFactory = new MailSSLSocketFactory();
        mailSSLSocketFactory.setTrustAllHosts(true);
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.ssl.socketFactory", mailSSLSocketFactory);

        //authenticator参数，登录自己的邮箱帐号密码
        Authenticator authenticator = new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                /**
                 *注意，QQ邮箱的规则是如果不是由腾讯的网页或者客户端打开登录的话，在其他任何地方
                 *登录邮箱，密码必须使用授权码，授权码下面会讲解，vlyvawibbsribgee
                 *xxxxxxx:自己的QQ邮箱登录帐号，也就是qq号
                 *yyyyyyy:密码，使用授权码登录，而不能使用原始的QQ密码
                 */
                return new PasswordAuthentication("yxxxsmc@163.com", "WSGVQWVJELRBXLSM");
            }
        };

        /**
         * properties 连接配置信息，邮件服务器的地址，是否进行权限验证
         * authenticator 权限验证，也就是帐号密码验证
         * 所以需要先配置这两个参数
         */
        Session session = Session.getDefaultInstance(properties, authenticator);

        //发送的内容对象Message
        Message message = new MimeMessage(session);
        //发件人是谁
        message.setFrom(new InternetAddress("yxxxsmc@163.com"));
        /**
         * 收件人是谁？
         * 第一个参数：
         * RecipientType.TO    代表收件人
         * RecipientType.CC    抄送
         * RecipientType.BCC   暗送
         * 第二个参数
         * 收件人的地址，或者是一个Address[]，用来装抄送或者暗送人的名单。或者用来群发。
         */
        message.setRecipient(Message.RecipientType.TO, new InternetAddress(mail));
        //主题（标题）
        message.setSubject("恭喜");
        //正文
        String msg = "您已成功订阅。";
        message.setContent(msg, "text/html; charset = UTF-8");
        //发送
        Transport.send(message);
        return true;
    }

    public static boolean sendMail(String name, String user_address, String require, String provence, String city) throws GeneralSecurityException, MessagingException {
        //props和authenticator参数
        Properties properties = new Properties();
        properties.setProperty("mail.host", "smtp.163.com");
        properties.setProperty("mail.smtp.auth", "true");

        //163邮箱的SSL加密。
        MailSSLSocketFactory mailSSLSocketFactory = new MailSSLSocketFactory();
        mailSSLSocketFactory.setTrustAllHosts(true);
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.ssl.socketFactory", mailSSLSocketFactory);

        //authenticator参数，登录自己的邮箱帐号密码
        Authenticator authenticator = new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                /**
                 *注意，QQ邮箱的规则是如果不是由腾讯的网页或者客户端打开登录的话，在其他任何地方
                 *登录邮箱，密码必须使用授权码，授权码下面会讲解，vlyvawibbsribgee
                 *xxxxxxx:自己的QQ邮箱登录帐号，也就是qq号
                 *yyyyyyy:密码，使用授权码登录，而不能使用原始的QQ密码
                 */
                return new PasswordAuthentication("yxxxsmc@163.com", "WSGVQWVJELRBXLSM");
            }
        };

        /**
         * properties 连接配置信息，邮件服务器的地址，是否进行权限验证
         * authenticator 权限验证，也就是帐号密码验证
         * 所以需要先配置这两个参数
         */
        Session session = Session.getDefaultInstance(properties, authenticator);

        //发送的内容对象Message
        Message message = new MimeMessage(session);
        //发件人是谁
        message.setFrom(new InternetAddress("yxxxsmc@163.com"));
        /**
         * 收件人是谁？
         * 第一个参数：
         * RecipientType.TO    代表收件人
         * RecipientType.CC    抄送
         * RecipientType.BCC   暗送
         * 第二个参数
         * 收件人的地址，或者是一个Address[]，用来装抄送或者暗送人的名单。或者用来群发。
         */
        message.setRecipient(Message.RecipientType.TO, new InternetAddress("yxxxsmc@163.com"));
        //主题（标题）
        message.setSubject("收到反馈");
        //正文
        String msg = "收到来自" + provence + city + "用户" + name + "的反馈，邮件地址为： " + user_address + "<br>" + "反馈内容：<br>" + require;
        message.setContent(msg, "text/html; charset = UTF-8");
        //发送
        Transport.send(message);
        return true;
    }
}
