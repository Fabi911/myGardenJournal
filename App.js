import {StatusBar} from "expo-status-bar";
import {ScrollView, StyleSheet, Text, View} from "react-native";


export default function App() {
	const name = "Julia";
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.container}>
				<Text style={styles.headline}>myGardenJournal</Text>
				<Text style={styles.text}>Hier entsteht {name}'s neue Garten Pflanzen und toDo App</Text>
				<StatusBar style="auto"/>
			</View>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#333",
		gap: 10,
		alignItems: "center",
		justifyContent: "flex-start",
	},
	headline: {
		marginTop: 60,
		color: "#fff",
		fontSize: 24,
	},
	text: {
		color: "green",
	},
});