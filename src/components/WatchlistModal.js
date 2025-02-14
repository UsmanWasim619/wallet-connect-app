import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Platform,
} from "react-native";
import Glassmorphism from "./Glassmorphism";
import CommonButton from "./CommonButton";

export default function WatchlistModal({ visible, onClose, onCreate }) {
  const [watchlistName, setWatchlistName] = useState("");

  const handleCreate = () => {
    if (watchlistName.trim()) {
      onCreate(watchlistName);
      setWatchlistName("");
      onClose();
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View
          style={styles.modalContainer}
          onStartShouldSetResponder={() => true}
        >
          <Glassmorphism style={styles.modalContent} height={260} width={280}>
            {/* Close Button */}
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>

            {/* Modal Header */}
            <Text style={styles.title}>New Watchlist</Text>
            <Text style={styles.subtitle}>Enter a name for this watchlist</Text>

            {/* Input Field */}
            <TextInput
              style={styles.input}
              placeholder="Watchlist name"
              placeholderTextColor="#666"
              value={watchlistName}
              onChangeText={setWatchlistName}
              autoFocus={true}
              maxLength={80}
            />
            {/* Create Button */}
            <CommonButton
              width={"100%"}
              style={styles.createButton}
              title={"Create"}
              onPress={handleCreate}
            />
          </Glassmorphism>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  // Modal
  overlay: {
    flex: 1,
    backgroundColor: "#00000077",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    maxWidth: 340,
  },
  modalContent: {
    backgroundColor: "#1b1a1c77",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    overflow: "hidden",
  },
  closeButton: {
    position: "absolute",
    right: 16,
    top: 16,
    zIndex: 1,
  },
  closeButtonText: {
    color: "#666",
    fontSize: 24,
    fontWeight: "400",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 8,
  },
  subtitle: {
    color: "#999",
    fontSize: 14,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#A1A1A117",
    borderRadius: 8,
    padding: 12,
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 20,
  },
  createButton: {
    width: "100%",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  createButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
