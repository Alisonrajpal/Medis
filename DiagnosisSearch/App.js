import { StatusBar } from "expo-status-bar";
import { FlatList,TextInput, StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";

//create a variable in an array to hold all the objects and key values
const data = [
  {
    diag_id: 1,
    diag_chapter: "CHAPTER I",
    diag_chapter_desc: "Certain infectious and parasitic diseases",
    diag_group_desc: "Intestinal infectious diseases",
    diag_code: "A00.0",
    diag_code_desc: "Cholera due to Vibrio cholerae 01, biovar cholerae",
  },
  {
    diag_id: 2,
    diag_chapter: "CHAPTER I",
    diag_chapter_desc: "Certain infectious and parasitic diseases",
    diag_group_desc: "Intestinal infectious diseases",
    diag_code: "A00.1 ",
    diag_code_desc: "Cholera due to Vibriocholerae 01, biovar eltor",
  },
  {
    diag_id: 3,
    diag_chapter: "CHAPTER I",
    diag_chapter_desc: "Certain infectious and parasitic diseases",
    diag_group_desc: "Intestinal infectious diseases",
    diag_code: "A00.9 ",
    diag_code_desc: "Cholera,unspecified",
  },
  {
    diag_id: 459,
    diag_chapter: "CHAPTER I",
    diag_chapter_desc: "Certain infectious and parasitic diseases",
    diag_group_desc:
      "Viral infections characterized by skin and mucous membrane lesions",
    diag_code: "B00 ",
    diag_code_desc: "Herpesviral [Herpes simplex] infections",
  },
  {
    diag_id: 460,
    diag_chapter: "CHAPTER I",
    diag_chapter_desc: "Certain infectious and parasitic diseases",
    diag_group_desc:
      "Viral infections characterized by skin and mucous membrane lesions",
    diag_code: "B00.0 ",
    diag_code_desc: "Eczema herpeticum",
  },
  {
    diag_id: 461,
    diag_chapter: "CHAPTER I",
    diag_chapter_desc: "Certain infectious and parasitic diseases",
    diag_group_desc:
      "Viral infections characterized by skin and mucous membrane lesions",
    diag_code: "B00.1 ",
    diag_code_desc: "Herpesviral vesicular dermatitis",
  },
  {
    diag_id: 909,
    diag_chapter: "CHAPTER II",
    diag_chapter_desc: "Neoplasms",
    diag_group_desc:
      "(Malignantneoplasms, stated or presumed to be primary, of specified sites, except of lymphoid, haematopoietic andrelated tissue) Lip, oral cavity and pharynx",
    diag_code: "C00 ",
    diag_code_desc: "Malignant neoplasm of lip",
  },
  {
    diag_id: 910,
    diag_chapter: "CHAPTER II",
    diag_chapter_desc: "Neoplasms",
    diag_group_desc:
      "(Malignantneoplasms, stated or presumed to be primary, of specified sites, except of lymphoid, haematopoietic andrelated tissue) Lip, oral cavity and pharynx",
    diag_code: "C00.0 ",
    diag_code_desc: "Malignant neoplasm,external upper lip",
  },
  {
    diag_id: 911,
    diag_chapter: "CHAPTER II",
    diag_chapter_desc: "Neoplasms",
    diag_group_desc:
      "(Malignantneoplasms, stated or presumed to be primary, of specified sites, except of lymphoid, haematopoietic andrelated tissue) Lip, oral cavity and pharynx",
    diag_code: "C00.1 ",
    diag_code_desc: "Malignant neoplasm,external lower lip",
  },
  {
    diag_id: 1430,
    diag_chapter: "CHAPTER II",
    diag_chapter_desc: "Neoplasms",
    diag_group_desc: "In situneoplasms",
    diag_code: "D00 ",
    diag_code_desc: "Carcinoma in situ of oral cavity, oesophagus andstomach",
  },
  {
    diag_id: 1431,
    diag_chapter: "CHAPTER II",
    diag_chapter_desc: "Neoplasms",
    diag_group_desc: "In situneoplasms",
    diag_code: "D00.0 ",
    diag_code_desc: "Carcinoma in situ lip, oral cavity and pharynx",
  },
  {
    diag_id: 1432,
    diag_chapter: "CHAPTER II",
    diag_chapter_desc: "Neoplasms",
    diag_group_desc: "In situneoplasms",
    diag_code: "D00.1 ",
    diag_code_desc: "Carcinoma in situ oesophagus",
  },
  {
    diag_id: 1953,
    diag_chapter: "CHAPTER IV",
    diag_chapter_desc: "Endocrine, nutritional and metabolicdiseases",
    diag_group_desc: "Disorders of thyroid gland",
    diag_code: "E00 ",
    diag_code_desc: "Congenitaliodine-deficiency syndrome",
  },
  {
    diag_id: 1954,
    diag_chapter: "CHAPTER IV",
    diag_chapter_desc: "Endocrine, nutritional and metabolicdiseases",
    diag_group_desc: "Disorders of thyroid gland",
    diag_code: "E00.0 ",
    diag_code_desc: "Congenitaliodine-deficiency syndrome, neurological type",
  },
  {
    diag_id: 1955,
    diag_chapter: "CHAPTER IV",
    diag_chapter_desc: "Endocrine, nutritional and metabolicdiseases",
    diag_group_desc: "Disorders of thyroid gland",
    diag_code: "E00.1 ",
    diag_code_desc: "Congenitaliodine-deficiency syndrome, myxoedematous type",
  },
  {
    diag_id: 2364,
    diag_chapter: "CHAPTER V",
    diag_chapter_desc: "Mental and behavioural disorders",
    diag_group_desc: "Organic, including symptomatic, mental disorders",
    diag_code: "F00 ",
    diag_code_desc: "Dementia in Alzheimer's disease",
  },
  {
    diag_id: 2365,
    diag_chapter: "CHAPTER V",
    diag_chapter_desc: "Mental and behavioural disorders",
    diag_group_desc: "Organic, including symptomatic, mental disorders",
    diag_code: "F00.0 ",
    diag_code_desc: "Dementia in Alzheimer's disease with early onset",
  },
  {
    diag_id: 2366,
    diag_chapter: "CHAPTER V",
    diag_chapter_desc: "Mental and behavioural disorders",
    diag_group_desc: "Organic, including symptomatic, mental disorders",
    diag_code: "F00.1 ",
    diag_code_desc: "Dementia in Alzheimer's disease with late onset",
  },
];

export default function App() {
  return 
    const [search, setSearch] =useState('');
    const [filteredData, setFilteredData] = useDate(data);

    useEffect(()=>{
      setFilteredData(//get the data from the array in the object
        data.filter(item=>
          item.diag_code.toLowerCase().includes(search.toLowerCase())
        )
      )
    },[search]);//call the search variable
    return(
    <View style={styles.container}>
      <TextInput placeholder="Search your diagnosis code here..." onChangeText={setSearch}/>
     
     <FlatList data={filteredData}
     keyExtractor={item => item.diag_id.toString()}
     renderItem={({item})=>()}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
