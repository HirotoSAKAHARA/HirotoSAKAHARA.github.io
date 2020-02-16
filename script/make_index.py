# -*- coding: utf-8 -*-

import os
import re
from bs4 import BeautifulSoup
from make_index_sub import *

base_dir = "../"

#各フォルダ毎のデータを作る
nChapter = 20
nSection = 20
nItem = 50

#section_strings= [[0 for i2 in range(nSection)] for i1 in range(nChapter)]
#chapter_strings= [0 for i1 in range(nChapter)]

item_urls = get_item_urls(base_dir, nChapter, nSection, nItem)
item_strings = get_item_strings(base_dir, item_urls, nChapter, nSection, nItem)
item_has_contents = get_item_has_contents(base_dir, item_urls, nChapter, nSection, nItem)

#print(item_strings)
#print(item_urls)
#print(item_strings)

update_index(base_dir, item_urls, item_strings, item_has_contents, nChapter, nSection, nItem)

(item_prev_urls, item_prev_strings, item_next_urls, item_next_strings) = \
  get_prev_and_next_urls_and_strings(item_urls, item_strings, nChapter, nSection, nItem)

#print(item_prev_urls)
#print(item_next_urls)
chapter_strings = get_chapter_string(base_dir, nChapter)
section_strings = get_section_string(base_dir, nChapter, nSection)

for i in range(nChapter):
  for j in range(nSection):
    for k in range(nItem):
      if(item_urls[i][j][k] != 0):
        update_navigation(base_dir + item_urls[i][j][k] \
            , item_prev_urls[i][j][k] \
            , item_prev_strings[i][j][k] \
            , item_next_urls[i][j][k] \
            , item_next_strings[i][j][k])
        update_hidden(base_dir + item_urls[i][j][k]) 
        update_title(base_dir + item_urls[i][j][k] \
            , chapter_strings[i] \
            , section_strings[i][j])

