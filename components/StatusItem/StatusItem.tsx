import styles from "./styles";
import { Text, View, Image, Pressable } from "react-native";
import chatRoomsData from "../../assets/dummy-data/ChatRooms";
import React, { useState } from "react";
import moment from "moment";
import defcolor from "../../constants/defcolor";
import { AntDesign } from "@expo/vector-icons";

export default function StatusItem({ chatRoom }) {
  const user = chatRoom.users[1];
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.title}>
          {/* <Image source={{ uri: user.imageUri }} style={styles.image} /> */}
        </View>
        <View style={styles.badgecontainer}></View>
      </View>
    </View>
  );
}

export function Feeds({ chatRoom }) {
  const likeCount = 52;
  const user = chatRoom.users[1];
  const [like, setLike] = useState(likeCount);
  const [liked, setLiked] = useState(false);

  const onPress = () => {
    setLike(likeCount + 1);
    setLiked(true);
  };
  return (
    <View>
      <View style={styles.imageContainer}>
        {/* <Image source={{ uri: user.imageUri }} style={styles.feedImage}/> */}
      </View>
      <View style={styles.feedContainer2}>
        <Image source={{ uri: user.imageUri }} style={styles.stImage} />
        <View style={styles.textContainer}>
          <Text style={{ fontWeight: "bold", width: "auto" }}>{user.name}</Text>
          <Text style={{ color: "grey" }}>
            {moment(chatRoom.lastMessage.createdAt).format("LT")}
          </Text>
          <View style={styles.stText2}>
            <Pressable onPress={onPress}>
              <AntDesign
                name="hearto"
                size={18}
                style={{ color: !liked ? "lightgrey" : defcolor }}
              />
            </Pressable>
            <Text style={{ marginRight: 10, marginLeft: 5 }}>{like}</Text>
            <AntDesign
              name="eye"
              size={20}
              color="lightgrey"
              style={{ alignItems: "center" }}
            />
            <Text style={{ marginLeft: 5, padding: 0.9 }}>9.9k</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
