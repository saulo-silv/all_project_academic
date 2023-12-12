import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

st.title("Avaliação Pratica")

base = pd.read_csv('./vgsales.csv')
st.write(base)

#gsheets_url = 'https://docs.google.com/spreadsheets/d/1qPMLg9bdn_4F0YiaKlJMwlbbGjOa0zfxLIRxorD7Zyw/export?format=csv&gid=1350247926'
#dados = pd.read_csv(gsheets_url)

st.title("1° Questão")
#primeira
# Contagem de jogos por editora
top_publishers = base['Publisher'].value_counts().head(5)
# Gráfico de barras
plt.figure(figsize=(10, 6))
sns.barplot(x=top_publishers.index, y=top_publishers.values)
plt.xlabel('Editora (Publisher)')
plt.ylabel('Contagem de Jogos')
plt.title('As 5 Editoras de Videogame Mais Populares')
plt.xticks(rotation=45)
st.pyplot()

#segunda
st.title("2° Questão")
# Contagem de jogos por plataforma
top_platforms = base['Platform'].value_counts().head(10)

# Gráfico de barras
plt.figure(figsize=(10, 6))
top_platforms.plot(kind='bar')
plt.xlabel('Plataforma')
plt.ylabel('Contagem de Jogos')
plt.title('As 10 Plataformas de Games Mais Populares')
plt.xticks(rotation=45)
st.pyplot()

#Terceira
st.title("3° Questão")
# Opções de seleção
regioes = ["América do Norte", "União Europeia", "Japão", "Resto do mundo", "Global"]
opcao_selecionada = st.selectbox("Selecione uma região", regioes)

# Filtrar dados pela região selecionada
if opcao_selecionada == "Global":
    dados_filtrados = base
else:
    dados_filtrados = base[base['NA_Sales'] + base['EU_Sales'] + base['JP_Sales'] + base['Other_Sales'] == opcao_selecionada]

# Ordenar por vendas globais
top_20_jogos = dados_filtrados.sort_values('Global_Sales', ascending=False).head(20)

# Mostrar tabela dos top 20 jogos
st.write("Top 20 Jogos Mais Populares na Região:", opcao_selecionada)
st.write(top_20_jogos)

#Quarta
st.title("4° Questão")
# Opções de seleção de jogo
jogos = base['Name'].tolist()
jogo_selecionado = st.selectbox("Selecione um jogo", jogos)

# Filtrar dados pelo jogo selecionado
dados_jogo = base[base['Name'] == jogo_selecionado]

# Total de vendas por região
vendas_regioes = [
    dados_jogo['NA_Sales'].values[0],
    dados_jogo['EU_Sales'].values[0],
    dados_jogo['JP_Sales'].values[0],
    dados_jogo['Other_Sales'].values[0],
    dados_jogo['Global_Sales'].values[0]
]

# Rótulos das regiões
rotulos_regioes = ["América do Norte", "União Europeia", "Japão", "Resto do mundo", "Global"]

# Gráfico de barras
plt.figure(figsize=(10, 6))
plt.bar(rotulos_regioes, vendas_regioes)
plt.xlabel('Região')
plt.ylabel('Vendas')
plt.title(f"Total de Vendas de {jogo_selecionado} por Região")
plt.xticks(rotation=45)
st.pyplot()

#Quinta
st.title("5° Questão")
# Opções de seleção de mercado
regioes = ["América do Norte", "União Europeia", "Japão", "Resto do mundo", "Global"]
opcao_selecionada = st.selectbox("Selecione um mercado", regioes)

# Filtrar dados pelo mercado selecionado
if opcao_selecionada == "Global":
    dados_filtrados = base
else:
    dados_filtrados = base[base['NA_Sales'] + base['EU_Sales'] + base['JP_Sales'] + base['Other_Sales'] == opcao_selecionada]

# Contagem de jogos por gênero
contagem_generos = dados_filtrados['Genre'].value_counts().head(5)

st.write(f"Top 5 Gêneros Mais Populares em {opcao_selecionada}:")
for genero, quantidade in contagem_generos.items():
    jogo_exemplo = dados_filtrados[dados_filtrados['Genre'] == genero]['Name'].iloc[0]
    st.write(f"Gênero: {genero}")
    st.write(f"Exemplo de Jogo: {jogo_exemplo}")
    st.write("---")

#Sexta
st.title("6° Questão")
# Opções de seleção de ano
anos = base['Year'].unique()
ano_selecionado = st.selectbox("Selecione um ano", anos)

# Filtrar dados pelo ano selecionado
dados_filtrados = base[base['Year'] == ano_selecionado]

# Quantidade de jogos lançados no ano selecionado
quantidade_jogos = dados_filtrados.shape[0]

# Jogo mais popular no ano selecionado
jogo_mais_popular = dados_filtrados.loc[dados_filtrados['Global_Sales'].idxmax(), 'Name']

st.write(f"No ano {ano_selecionado}, foram lançados {quantidade_jogos} jogos.")
st.write(f"O jogo mais popular desse ano foi: {jogo_mais_popular}")

#Setima
st.title("7° Questão")
# Opções de seleção de jogo
jogos = base['Name'].tolist()
jogo_selecionado = st.selectbox("Selecione um jogo", jogos, key="jogo")

# Filtrar dados pelo jogo selecionado
dados_filtrados = base[base['Name'] == jogo_selecionado]

if not dados_filtrados.empty:
    # Informações sobre o jogo
    genero = dados_filtrados['Genre'].iloc[0]
    plataforma = dados_filtrados['Platform'].iloc[0]
    ano_lancamento = dados_filtrados['Year'].iloc[0]
    vendas_globais = dados_filtrados['Global_Sales'].iloc[0]

    # Exibir informações sobre o jogo
    st.write(f"Jogo selecionado: {jogo_selecionado}")
    st.write(f"Gênero: {genero}")
    st.write(f"Plataforma: {plataforma}")
    st.write(f"Ano de lançamento: {ano_lancamento}")
    st.write(f"Vendas globais: {vendas_globais} milhões")
else:
    st.write("Nenhum jogo encontrado para a seleção feita.")


st.set_option('deprecation.showPyplotGlobalUse', False)






