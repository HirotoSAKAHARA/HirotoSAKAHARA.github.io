 # -*- coding: utf-8 -*- 

import os
import re

from bs4 import BeautifulSoup 
from make_index_sub import *
from copy_pages_sub import *

base_dir = "../tmp/"
dest_dir = "../html/"
index_dir = "../"


#各フォルダ毎のデータを作る
nChapter = 20
nSection = 20
nItem = 50 

item_urls = get_item_urls(base_dir, nChapter, nSection, nItem)

shutil.rmtree(dest_dir)
os.mkdir(dest_dir) 

copy_index_page(base_dir, index_dir)

for i in range(nChapter):
    for j in range(nSection):
        for k in range(nItem):
            if(item_urls[i][j][k] != 0): 
                print(i, j, k, item_urls[i][j][k])
                copy_pages(base_dir, dest_dir, item_urls[i][j][k])


