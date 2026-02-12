import pandas as pd 
import re

df = pd.read_excel("ballardin.xlsx")

def formatar_telefone(numero):
    apenas_numeros = re.sub(r"\D", "", str(numero))
    ddd = apenas_numeros[:2]
    telefone = apenas_numeros[2:]
    return f"+55 {ddd} {telefone}"

df["Telefone_Corrigido"] = df["Telefone"].apply(formatar_telefone)

df.to_excel("ballardin_corrigido.xlsx", index=False)

print("Tabela corrigida salva em 'ballardin_corrigido.xlsx'")
