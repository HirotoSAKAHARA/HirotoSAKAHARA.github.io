# -*- coding: utf-8 -*-

import os
import re
from bs4 import BeautifulSoup
import shutil


def del_number_of_urls(html):
    new_html = re.sub(r'(<a +class="(local|prev|next|upper)" +href=")[0-9_a-zA-Z]+/[0-9_a-zA-Z]+/[0-9]+_',r'\1html/', html, flags=re.MULTILINE)
    new_html = re.sub(r'<base href="../../" />',r'<base href="../">', new_html, flags=re.MULTILINE)
    return new_html

def copy_pages(base_dir, dest_dir, url):
    with open(base_dir + url, "r", encoding="utf-8", newline="\n") as f:
        html = f.read() 

    html_rev = del_number_of_urls(html)

    last_url = re.split("/",url)[-1];
    new_url = re.sub("[0-9]+_","",last_url)
    print(new_url)


    with open(dest_dir + new_url, "w", encoding="utf-8", newline="\n") as f:
        f.write(html_rev) 


def modify_index_page(html):
    new_html = re.sub(r'(<a +class="(local|prev|next|upper|nocontents)" +href=")[0-9_a-zA-Z]+/[0-9_a-zA-Z]+/[0-9]+_',r'\1html/', html, flags=re.MULTILINE)
    new_html = re.sub(r'<base href="../../" />',r'<base href="../">', new_html, flags=re.MULTILINE)
    return new_html 

def copy_index_page(base_dir, dest_dir):
    with open(base_dir + "index.html", "r", encoding="utf-8", newline="\n") as f:
        html = f.read() 

    html_rev = modify_index_page(html)

    with open(dest_dir + "index.html", "w", encoding="utf-8", newline="\n") as f:
        f.write(html_rev)  
