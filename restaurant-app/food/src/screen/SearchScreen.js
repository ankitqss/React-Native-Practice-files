import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../components/yelp";
import ResultsList from "../components/ResultsList";
import { ScrollView } from "react-native";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState();
  const [loading, setLoading] = useState(false);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  const searchApi = async (searchTerm) => {
    setLoading(true);
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      console.log(response);
      setResults(response.data.businesses);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setErrorMsg("Something went wrong !");
      setLoading(false);
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, [errorMsg]);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTextSubmit={() => searchApi(term)}
        />
        <Text>We have found {results.length} results</Text>
        {errorMsg ? <Text>{errorMsg}</Text> : ""}

        <ResultsList
          loading={loading}
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList
          loading={loading}
          results={filterResultsByPrice("$$")}
          title="Bit Pricier"
        />
        <ResultsList
          loading={loading}
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
