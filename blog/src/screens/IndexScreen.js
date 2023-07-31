import React, { useContext } from "react";
import { Button, FlatList, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>IndexScreen</Text>
      <Button
        title="Delete BLog Post"
        onPress={() => {
          deleteBlogPost();
        }}
      />
      <Button title="Add Blog Post" onPress={() => addBlogPost()} />
      <FlatList
        data={data}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;
