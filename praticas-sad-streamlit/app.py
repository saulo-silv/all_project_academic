import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

base = pd.read_csv('./sad.csv')
st.write(base)

st.title("Análise de Dados do Dataset de Estudantes")

st.title("Primeira")
#Questão 1
media_idade_GP = base.loc[base['school'] == 'GP', 'age'].mean()
st.write("A média de idade dos alunos na escola GP é:", media_idade_GP)


#Questão 2
moda_endereco_MS = base.loc[base['school'] == 'MS', 'address'].mode().values[0]
st.write("A moda do endereço dos alunos na escola MS é:", moda_endereco_MS)

#Questão 3
mediana_tempo_viagem_GP = base.loc[base['school'] == 'GP', 'traveltime'].median()
st.write("A mediana do tempo de viagem dos alunos que estudam na escola GP é:", mediana_tempo_viagem_GP)

#Questão 4 
desvio_padrao_idade_apoio_MS = base.loc[(base['school'] == 'MS') & (base['studytime'] == 'sim'), 'age'].std()
st.write("O desvio padrão da idade dos alunos que têm apoio educacional extra na escola MS é:", desvio_padrao_idade_apoio_MS)

#Questão 5 
media_tempo_estudo_pais_separados_GP = base.loc[(base['school'] == 'GP') & (base['guardian'] == 'sim'), 'studytime'].mean()
st.write("A média do tempo semanal de estudo dos alunos cujos pais estão separados na escola GP é:", media_tempo_estudo_pais_separados_GP)

#Questão 6 
moda_motivo_escolha_MS = base.loc[base['school'] == 'MS', 'address'].mode().values[0]
st.write("A moda do motivo pelo qual os alunos escolheram a escola MS é:", moda_motivo_escolha_MS)

#Questão 7
mediana_num_faltas_GP = base.loc[base['school'] == 'GP', 'absences'].median()
st.write("A mediana do número de faltas dos alunos que frequentam a escola GP é:", mediana_num_faltas_GP)

#Questão 8
desvio_padrao_saude_atividades_MS = base.loc[(base['school'] == 'MS') & (base['activities'] == 'sim'), 'health'].std()
st.write("O desvio padrão do nível de saúde dos alunos que frequentam atividades extracurriculares na escola MS é:", desvio_padrao_saude_atividades_MS)

#Questão 9
alunos_cumpriram_horas = base.loc[base['freetime'] > 0].shape[0]
st.write("O número de alunos que já cumpriram as horas extracurriculares é:", alunos_cumpriram_horas)

#Questão 10
moda_consumo_alcool_MS = base.loc[base['school'] == 'MS', 'age'].mode().values[0]
st.write("A moda do consumo de álcool dos alunos da escola MS durante a semana de trabalho é:", moda_consumo_alcool_MS)





