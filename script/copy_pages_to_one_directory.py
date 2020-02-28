 # -*- coding: utf-8 -*- 

import os
import re

from bs4 import BeautifulSoup 
from make_index_sub import *
from copy_pages_sub import *

base_dir = "../tmp/"
dest_base_dir = "../"
dest_html_dir = "html/"
dest_js_dir = "js/"
index_dir = "../"


#各フォルダ毎のデータを作る
nChapter = 20
nSection = 20
nItem = 50 

item_urls = get_item_urls(base_dir, nChapter, nSection, nItem, "html")

shutil.rmtree(dest_base_dir+dest_html_dir)
os.mkdir(dest_base_dir+dest_html_dir) 
shutil.rmtree(dest_base_dir+dest_js_dir)
os.mkdir(dest_base_dir+dest_js_dir) 


copy_index_page(base_dir, index_dir)

js_urls = get_item_urls(base_dir, nChapter, nSection, nItem, "js")

for i in range(nChapter):
    for j in range(nSection):
        for k in range(nItem):
            if(item_urls[i][j][k] != 0): 
                copy_pages(base_dir, dest_base_dir,dest_html_dir, item_urls[i][j][k])
            if(js_urls[i][j][k] != 0): 
                copy_pages(base_dir, dest_base_dir,dest_js_dir  , js_urls[i][j][k])


