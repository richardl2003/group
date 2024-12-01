import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Group {
  groupId: string;
  groupName: string;
  participants: Participant[];
}

export interface Participant {
  id: string;
  name: string;
  group: string;
  groupId: string;
}

export async function getGroups(): Promise<Group[]> {
  try {
    const groups = await AsyncStorage.getItem("groups");
    return groups ? JSON.parse(groups) : [];
  } catch {
    return [];
  }
}

export async function addGroup(newGroup: Group) {
  const recentGroups = await getGroups();
  const updatedGroups = [
    newGroup,
    ...recentGroups.filter(
      (recentGroup) => newGroup.groupId !== recentGroup.groupId
    ),
  ];
  try {
    await AsyncStorage.setItem("groups", JSON.stringify(updatedGroups));
  } catch (err) {
    console.error(err);
  }
}

export async function deleteGroup(groupId: string) {
  const recentGroups = await getGroups();
  const updatedGroups = recentGroups.filter(
    (recentGroup) => recentGroup.groupId !== groupId
  );

  try {
    await AsyncStorage.setItem("groups", JSON.stringify(updatedGroups));
  } catch (err) {
    console.error(err);
  }
}
