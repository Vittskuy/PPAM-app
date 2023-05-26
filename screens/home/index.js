import { FlatList, StyleSheet, View, Alert } from "react-native";
import { ActivityIndicator, Appbar, Button, FAB, IconButton, List, Text } from "react-native-paper";
import theme from "../../config/theme";
import { StatusBar } from 'expo-status-bar';

import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthProvider";
//import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function Home() {
    const navigation = useNavigation();
    const { user } = useAuth();
    const handleLogout = () => {
        auth().signOut();
    }
    return (
        <View style={styles.container}>
          <Text variant="headlineLarge" style={styles.title}></Text>
          <Text>Project PPAM yeay Ok</Text>
          <View style ={styles.buttonContainer}>
            <Button mode="contained" onPress={handleLogout}>Logout</Button>
          </View>
        </View>
      );

    /*const query = firestore()
        .collection("todos")
        .where("userId", "==", user?.uid)
        .orderBy("createdAt", "desc");

    const [data, loading] = useCollectionData(query, { idField: "id" });

    const handleDelete = item => e => {
        Alert.alert('Delete Confirmation', 'Are you sure want to delete this todo?', [
            {
                text: 'Cancel',
                onPress: () => { },
                style: 'cancel',
            },
            {
                text: 'Yes', onPress: async () => {

                    await firestore().collection("todos").doc(item.id).delete();

                }
            },
        ]);

    }*/



    /*return <SafeAreaView style={styles.container}>
        {}
        <Appbar>
            <Appbar.Content title="Your To Do" />
        </Appbar>
        {loading ?
            <View style={styles.loading}>
                <ActivityIndicator />
            </View>
            :
            <FlatList

                data={data}
                renderItem={({ item }) => {
                    const { title, description } = item;
                    return <List.Item
                        left={props => <List.Icon {...props} icon="checkbox-blank-circle" />}
                        title={title}
                        description={description}
                        right={props => <View {...props}>
                            <View style={styles.actionBtns}>
                                <IconButton onPress={() => navigation.navigate("ToDoForm", {
                                    mode: "update",
                                    item
                                })} icon="pencil" />
                                <IconButton
                                    onPress={handleDelete(item)}
                                    icon="delete" />
                            </View>
                        </View>}
                    />
                }}
            />}
        <FAB
            onPress={() => navigation.navigate("ToDoForm", { mode: "create" })}
            style={styles.fab}
            icon={"plus"}
        />
    </SafeAreaView> */
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        marginTop: 20
    },
    title: {
        color: theme.colors.primary
    },
    fab: {
        position: "absolute",
        right: 40,
        bottom: 40
    },
    actionBtns: {
        flexDirection: "row"
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})