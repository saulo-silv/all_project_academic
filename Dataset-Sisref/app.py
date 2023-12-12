import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

st.set_page_config(page_title="Dashboard - Student Dataset", page_icon=":books:")

st.title("Análise de Dados do Dataset de Refeições ")


gsheets_url = 'https://docs.google.com/spreadsheets/d/1Xr6uPNAlT4n9FDuR91JyY2QwFGLGmMICPE5WqjW-s1k/export?format=csv&gid=1378939680' 
dados = pd.read_csv(gsheets_url)

st.dataframe(dados)

# Plot do gráfico
st.title("periodo da Refeição ")

plt.figure(figsize=(10, 6))
sns.countplot(x='Refeicao', data=dados)
plt.xlabel('periodo de Refeição')
plt.ylabel('Contagem')
plt.title('Distribuição do perido de Refeição')

st.pyplot()

st.set_option('deprecation.showPyplotGlobalUse', False)

st.title("Ano da Refeição ")
plt.figure(figsize=(10, 6))
sns.countplot(x='Ano_da_Refeicao', data=dados)
plt.xlabel('Ano da Refeição')
plt.ylabel('Contagem')
plt.title('Quatidade de refeição por ano')

st.pyplot()

st.title("Grafico para informar se compareceu")
plt.figure(figsize=(10, 6))
sns.countplot(x='Compareceu', data=dados)
plt.ylabel('Contagem')


st.pyplot()

st.set_option('deprecation.showPyplotGlobalUse', False)