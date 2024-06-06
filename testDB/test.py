from bs4 import BeautifulSoup
import requests
import csv
import random
import json
URL = 'http://127.0.0.1:5500/testDB/scrape.html'
page = requests.get(URL)
soup = BeautifulSoup(page.content, 'html.parser')
resultImg = soup.find_all('img')
resultName = soup.find_all('p', class_='ProTitle')
# for i in resultImg:
#     print(i['src'])
# for i in resultName:
#     print(i.get_text())


# with open('test.csv', 'w') as csvfile:
#     csvwriter = csv.writer(csvfile)
#     csvwriter.writerow(fields)
#     for i in range(len(resultImg)):
#         randomRating = random.randint(1,5)
#         rows.append([resultName[i].get_text(), resultImg[i]['src'], randomRating])
#     csvwriter.writerows(rows)
#     print('Done')
with open("sample.json", "w") as outfile:
    json.dump(
        [
            {
                "name": resultName[i].get_text(),
                "img": resultImg[i]['src'],
                "rating": random.randint(1, 5)
            }
            for i in range(len(resultImg))
        ],
        outfile
    )
    print('Done')