package com.ytu.it.smc.JavaWeb_02.Filter;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebFilter(filterName = "NoCacheFilter", urlPatterns = "/index.jsp")
public class NoCacheFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        Filter.super.init(filterConfig);
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletResponse httpServletResponse = (HttpServletResponse) servletResponse;
        httpServletResponse.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        httpServletResponse.setHeader("Pragma", "no-cache");
        httpServletResponse.setDateHeader("Expires", 0);
        filterChain.doFilter(servletRequest, servletResponse);

    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }
}
