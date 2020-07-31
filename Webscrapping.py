import time
from selenium import webdriver
import shutil
import pandas as pd

driver = webdriver.Chrome(executable_path='C:/chromedriver/chromedriver.exe')
driver.get('http://www.seade.gov.br/wp-content/uploads/2020/07/Dados-covid-19-municipios.csv')
time.sleep(5)

#source = 'C:/Users/hipol/Downloads/Dados-covid-19-municipios.csv'
source = 'C:/Users/Z003VEBM/Downloads/Dados-covid-19-municipios.csv'
destination = 'C:/Users/Z003VEBM/Desktop/Shawee/Datasetsupdate/Last Report'

new_path = shutil.move(source, destination)

##Definição cidades do estado de SP

url = "C:/Users/Z003VEBM/Desktop/Shawee/Datasetsupdate/Last Report"
url2 = 'https://raw.githubusercontent.com/tbrugz/geodata-br/master/geojson/'

#state_score = "C:/Users/Z003VEBM/Desktop/Shawee/Datasetsupdate/Last Report/Dados-covid-19-municipios.csv"
state_geo = f'{url2}/geojs-35-mun.json'
state_data = pd.read_csv('C:/Users/Z003VEBM/Desktop/Shawee/Datasetsupdate/Last Report/Dados-covid-19-municipios.csv', sep=",")

m = folium.Map(location=[48, -102], zoom_start=3)

folium.Choropleth(
    geo_data=state_geo,
    name='choropleth',
    data=state_data,
    columns=['Cod_IBGE', 'Mun_Total de casos'],
    key_on='Feature.properties.id',
    fill_color='RdPu',
    fill_opacity=0.2,
    line_opacity=0.2,
    legend_name='Scorevid'
).add_to(m)

folium.LayerControl().add_to(m)

m.save('Mapa.html')