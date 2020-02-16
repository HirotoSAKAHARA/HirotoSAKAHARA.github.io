# -*- coding: utf-8 -*-

import os
import re
from bs4 import BeautifulSoup

def get_item_urls(base_dir, nChapter, nSection, nItem):
  item_urls   = [[[0 for i3 in range(nItem)] for i2 in range(nSection)] for i1 in range(nChapter)]
  #章のフォルダを走査
  chapter_dirs =  [d for d in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, d))]
  for chapter_dir in chapter_dirs:
    chapter = chapter_dir.split("_")[0]
    if(chapter.isdecimal()):
      chapter = int(chapter)
      chapter_dir = chapter_dir+"/"
      section_dirs = [d for d in os.listdir(base_dir+chapter_dir) if os.path.isdir(os.path.join(base_dir+chapter_dir, d))]
      for section_dir in section_dirs:
      #節のフォルダを走査
        section = section_dir.split("_")[0]
        if(section.isdecimal()):
          section= int(section)
          section_dir = chapter_dir+section_dir+"/"
          item_files= [d for d in os.listdir(base_dir+section_dir) if os.path.isfile(os.path.join(base_dir+section_dir, d))]
          #項のファイルを走査
          for item_file in  item_files:
            item = item_file.split("_")[0]
            if(item.isdecimal()):
              item = int(item)
              item_urls[chapter-1][section-1][item-1] = section_dir+item_file;
  return item_urls;

def get_item_strings(base_dir, item_urls, nChapter, nSection, nItem):
  item_strings= [[[0 for i3 in range(nItem)] for i2 in range(nSection)] for i1 in range(nChapter)]
  for i in range(nChapter):
    for j in range(nSection):
      for k in range(nItem):
        if(item_urls[i][j][k] != 0):
          with open(base_dir+ item_urls[i][j][k], "r", encoding="utf-8", newline="\n") as f:
            html = f.read()
            soup = BeautifulSoup(html, "html.parser")
            item_string = str(soup.find("h1"))
            item_string = re.sub("</*?h1>","",item_string)
            item_strings[i][j][k] = item_string;
  return item_strings;

def get_item_has_contents(base_dir, item_urls, nChapter, nSection, nItem):
  item_has_contents = [[[False for i3 in range(nItem)] for i2 in range(nSection)] for i1 in range(nChapter)]
  for i in range(nChapter):
    for j in range(nSection):
      for k in range(nItem):
        if(item_urls[i][j][k] != 0):
          with open(base_dir+ item_urls[i][j][k], "r", encoding="utf-8", newline="\n") as f:
            html = f.read()
            index_html_h2 = re.split("<h2>",html);
            if(len(index_html_h2) != 1):
              item_has_contents[i][j][k] = True

  return item_has_contents;


def update_index(base_dir, item_urls, item_strings, item_has_contents, nChapter, nSection, nItem):
  with open(base_dir + "index.html", "r", encoding="utf-8", newline="\n") as f:
    index_html = f.read()

  #h2の中身を一旦全部削除する
  index_html = re.sub("</h2>.+?(?P<tag><div class=\"end_of_page_margin\">|<h1>|<h2>)","</h2>\n\g<1>", index_html, flags=(re.MULTILINE | re.DOTALL)) 
  index_html = re.sub("\n<h2>","\n  <h2>", index_html, flags=(re.MULTILINE | re.DOTALL)) 

  index_html_h1 = re.split("<h1>",index_html);

  index_html_rev = ""
  #各章で分ける
  for chapter_p1 in range(len(index_html_h1)):
    if chapter_p1 == 0:
      index_html_rev = index_html_h1[0] + "<h1>"
      continue
    index_html_h2 = re.split("</h2> *?\n",index_html_h1[chapter_p1])
    #各節で分ける
    for section_p1 in range(len(index_html_h2)):
      if section_p1 == 0:
        index_html_rev = index_html_rev + index_html_h2[0] + "</h2>\n"
        continue
      section_items = ""
      for item in range(nItem):
        if(item_urls[chapter_p1-1][section_p1 - 1][item] != 0):
          if(item != 0):
            section_items += ", "
          if(item_has_contents[chapter_p1-1][section_p1 - 1][item] == True):
            item_string = " <a href=\"" + \
              item_urls[chapter_p1-1][section_p1 - 1][item] + \
              "\">" + \
              item_strings[chapter_p1-1][section_p1 - 1][item] + \
              "</a> "
          else:
            item_string = " <a class=\"nocontents\" href=\"" + \
              item_urls[chapter_p1-1][section_p1 - 1][item] + \
              "\">" + \
              item_strings[chapter_p1-1][section_p1 - 1][item] + \
              "</a> "

          section_items = section_items + item_string

      #3つ(+1)の空白をおいて項目を書き出し
      section_items = "   " + section_items + "\n"
      index_html_h2[section_p1] = section_items + index_html_h2[section_p1];
      index_html_rev += index_html_h2[section_p1]
      if section_p1 != len(index_html_h2) - 1:
        index_html_rev += "</h2>\n"
    if chapter_p1 != len(index_html_h1) - 1:
      index_html_rev += "<h1>"

  with open(base_dir + "index.html", "w", encoding="utf-8", newline="\n") as f:
    f.write(index_html_rev)

def get_prev_and_next_urls_and_strings(item_urls, item_strings, nChapter, nSection, nItem):
  item_prev_urls   = [[[0 for i3 in range(nItem)] for i2 in range(nSection)] for i1 in range(nChapter)]
  item_prev_strings= [[[0 for i3 in range(nItem)] for i2 in range(nSection)] for i1 in range(nChapter)]

  item_next_urls   = [[[0 for i3 in range(nItem)] for i2 in range(nSection)] for i1 in range(nChapter)]
  item_next_strings= [[[0 for i3 in range(nItem)] for i2 in range(nSection)] for i1 in range(nChapter)]

  prev_i = 0; 
  prev_j = 0; 
  prev_k = 0; 
  current_b = False;
  current_i = 0; 
  current_i= 0; 
  current_k = 0; 
  next_b = False;
  next_i = 0; 
  next_i= 0; 
  next_k = 0; 
  for i in range(nChapter):
    for j in range(nSection):
      for k in range(nItem):
        if(item_urls[i][j][k] != 0):
          if(next_b == False):
            next_i = i
            next_j = j
            next_k = k
            next_b = True
          elif(current_b == False):
            current_i = next_i
            current_j = next_j
            current_k = next_k
            next_i = i
            next_j = j
            next_k = k
            current_b = True
            item_prev_urls[current_i][current_j][current_k]    = "index.html"
            item_prev_strings[current_i][current_j][current_k] = "ホーム"

            item_next_urls[current_i][current_j][current_k]    = item_urls[next_i][next_j][next_k]
            item_next_strings[current_i][current_j][current_k] = item_strings[next_i][next_j][next_k]

          else:
            prev_i = current_i
            prev_j = current_j
            prev_k = current_k
            current_i = next_i
            current_j = next_j
            current_k = next_k
            next_i = i;
            next_j = j;
            next_k = k;

            item_prev_urls[current_i][current_j][current_k]    = item_urls[prev_i][prev_j][prev_k]
            item_prev_strings[current_i][current_j][current_k] = item_strings[prev_i][prev_j][prev_k]

            item_next_urls[current_i][current_j][current_k]    = item_urls[next_i][next_j][next_k]
            item_next_strings[current_i][current_j][current_k] = item_strings[next_i][next_j][next_k]

  item_prev_urls[next_i][next_j][next_k]    = item_urls[current_i][current_j][current_k]
  item_prev_strings[next_i][next_j][next_k] = item_strings[current_i][current_j][current_k]

  item_next_urls[next_i][next_j][next_k]    = "index.html"
  item_next_strings[next_i][next_j][next_k] = "ホーム"

  return (item_prev_urls, item_prev_strings, item_next_urls, item_next_strings)

def get_chapter_string(base_dir, nChapter):
  chapter_strings= [0 for i1 in range(nChapter)]
  with open(base_dir + "index.html", "r", encoding="utf-8", newline="\n") as f:
    index_html = f.read()

  soup = BeautifulSoup(index_html, "html.parser")
  chapter_all = soup.find_all("h1")

  for i in range(len(chapter_all)):
    chapter_strings[i] = re.sub("</*?h1>","",str(chapter_all[i]))

  return chapter_strings;

def get_section_string(base_dir, nChapter, nSection):
  section_strings= [[0 for i2 in range(nSection)] for i1 in range(nChapter)]
  with open(base_dir + "index.html", "r", encoding="utf-8", newline="\n") as f:
    index_html = f.read()

  index_html_h1 = re.split("<h1>",index_html);

  for i in range(len(index_html_h1)):
    if i == 0:
      continue;
    soup = BeautifulSoup(index_html_h1[i], "html.parser")
    section_all = soup.find_all("h2")
    for j in range(len(section_all)):
      section_strings[i-1][j] = re.sub("</*?h2>","",str(section_all[j]))

  return section_strings

def update_navigation(target_file, prev_urls, prev_string, next_urls, next_string):
  data = ""
  with open(target_file, "r", encoding="utf-8", newline="\n") as f:
    data = f.read()

  data = re.sub("<a class=\"prev.+?a>\n", "",data)
  data = re.sub("<a class=\"upper.+?a>\n", "",data)
  data = re.sub("<a class=\"next.+?a>\n", "",data)

  sp_datas_eop = re.split("<div class.*=.*\"end_of_page\"> *?\n",data);
  data = sp_datas_eop[0] + "<div class=\"end_of_page\">\n"
  data += "<a class=\"prev\" href=\"" + prev_urls + "\">" + prev_string + "</a>\n"
  data += "<a class=\"upper\" href=\"index.html\">上：ホーム</a>\n"
  data += "<a class=\"next\" href=\"" + next_urls + "\">" + next_string + "</a>\n"
  data += sp_datas_eop[1];

  with open(target_file, "w", encoding="utf-8", newline="\n") as f:
    f.write(data)

def update_hidden(target_file):
  data = ""
  with open(target_file, "r", encoding="utf-8", newline="\n") as f:
    data = f.read()

  #delete all
  data = re.sub("<div>", "",data)
  data = re.sub(" *<div class=\"hidden_box\">\n", "",data)
  data = re.sub(" *<label for.+?label>\n", "",data)
  data = re.sub(" *<input type=\"checkbox\".+?/>\n", "",data)
  data = re.sub(" *<div class=\"hidden_show\">\n", "",data)
  data = re.sub(" *</div></div>\n", "",data)

#</h2>の後に隠すやつをつける
  sp_datas_bh2 = re.split("</h2> *?\n",data);
  if(len(sp_datas_bh2) != 1):
    data = ""
    for i in range(len(sp_datas_bh2)):
      if i == 0:
        data += sp_datas_bh2[i] + "</h2>\n"
      else:
        sp_datas_bh2[i] = "    <div><div class=\"hidden_show\">\n" + sp_datas_bh2[i];
#        sp_datas_bh2[i] = "    <div class=\"hidden_show\">\n" + sp_datas_bh2[i];
#        sp_datas_bh2[i] = "    <input type=\"checkbox\" id=\"label_" + str(i) + "\"/>\n" + sp_datas_bh2[i];
#        sp_datas_bh2[i] = "    <label for=\"label_" + str(i) + "\">[+]　　　</label>\n" + sp_datas_bh2[i];
#        sp_datas_bh2[i] = "    <div class=\"hidden_box\">\n" + sp_datas_bh2[i];
        if i != len(sp_datas_bh2) - 1:
           sp_datas_bh2[i] = sp_datas_bh2[i] + "</h2>\n"
        data += sp_datas_bh2[i];

#<h2>の前に隠すやつ終了をつける
    sp_datas_th1 = re.split(" *<h1>",data)

    data = ""
    for h1i in range(len(sp_datas_th1)):
      sp_datas_th2 = re.split(" *<h2>",sp_datas_th1[h1i]);
      # h2がない時 
      if len(sp_datas_th2) == 1:
        data += sp_datas_th2[0]
        if( h1i != len(sp_datas_th1) - 1):
          data += "<h1>"
        continue

      #　h2がある時は分割に従って処理
      for i in range(len(sp_datas_th2)):
        if i == 0:
        #最初のやつ
          data += sp_datas_th2[i] + "  <h2>"
        elif i != len(sp_datas_th2) - 1:
        #最後のやつ以外(後ろにh2がある)
          data += sp_datas_th2[i] + "    </div></div>\n" + "  <h2>";
        elif h1i != len(sp_datas_th1) - 1:
        #h1の最後のやつ以外(後ろにh1がある)
          data += sp_datas_th2[i] + "    </div></div>\n" + "<h1>";
        else:
          data += sp_datas_th2[i];

    sp_datas_eop = re.split("<div class.*?=.*?\"end_of_page_margin\"></div> *?\n",data);
    data = sp_datas_eop[0] + "    </div></div>\n" + "<div class=\"end_of_page_margin\"></div>\n"
    data = data + sp_datas_eop[1]
  with open(target_file, "w", encoding="utf-8", newline="\n") as f:
    f.write(data)

def update_title(target_file, chapter_string, section_string):
  data = ""
  with open(target_file, "r", encoding="utf-8", newline="\n") as f:
    data = f.read()
  data = re.sub("<title>.+?</title>", "<title></title>", data)

  sptarget = re.split("/",target_file);
  spdata = re.split("<title>",data);

  spchapter= re.split("_",sptarget[1])
  spsection= re.split("_",sptarget[2])
  spitem= re.split("_",re.sub(".html", "", sptarget[3]))

  title_top = "hsmemo - "
  title = ""
  for i in range(len(spchapter)):
    if i == 0:
      continue;
    title += spchapter[i] + " "
  title += "- "
  for i in range(len(spsection)):
    if i == 0:
      continue;
    title += spsection[i] + " "
  title += "- "
  for i in range(len(spitem)):
    if i == 0:
      continue;
    title += spitem[i] + " "

  data = spdata[0] + "<title>" + title_top + title + spdata[1]

  data = re.sub("<div class=\"title\">.+?</div>", "<div class=\"title\">\n  </div>", data, flags=(re.MULTILINE | re.DOTALL))
  spdata2 = re.split("<div class=\"title\"> *?\n", data)
  data = spdata2[0] + "<div class=\"title\">\n" + "    <a href=\"index.html\">hsmemo</a>\n" +\
          "    <span class=\"subtitle\"> : " + chapter_string + " - " + section_string + "</span>\n" + spdata2[1]
 
  with open(target_file, "w", encoding="utf-8", newline="\n") as f:
    f.write(data)

