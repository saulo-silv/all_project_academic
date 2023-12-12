import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

dados = pd.read_csv('./songs.csv')
st.write(dados)