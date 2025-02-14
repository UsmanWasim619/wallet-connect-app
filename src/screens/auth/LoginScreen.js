import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Glassmorphism from "../../components/Glassmorphism";
import CommonButton from "../../components/CommonButton";
import { GradientHOC } from "../../HOC/GradientHOC";

// Validation Schema
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username or Mobile Number is required")
    .matches(/^[0-9]*$/, "Mobile Number must contain only digits") // If you want to enforce mobile number
    .min(10, "Mobile Number must be at least 10 digits")
    .max(15, "Mobile Number can't exceed 15 digits"),
});

const LoginScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={{ justifyContent: "center", marginTop: 50 }}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>
              Please enter your details to Login
            </Text>
          </View>
          <Formik
            initialValues={{ username: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              // Here you would handle the submission

              if (values) navigation.navigate("OTPScreen");
              console.log(values.username);
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <Glassmorphism height={370}>
                <Text style={styles.below}>
                  Enter your username or mobile no below
                </Text>
                <Text style={styles.inputLabel}>Username / Mobile No.</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Username/ Mobile No"
                  placeholderTextColor="#666"
                  value={values.username}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                />
                {errors.username && touched.username && (
                  <Text style={styles.errorText}>{errors.username}</Text>
                )}
                {/* <TouchableOpacity
                  style={styles.sendOtpButton}
                  onPress={handleSubmit}
                >
                  <Text style={styles.sendOtpText}>Send OTP</Text>
                </TouchableOpacity> */}
                <View style={{ marginBottom: 15 }}>
                  <CommonButton
                    title={"Send OTP"}
                    onPress={handleSubmit}
                    width={"100%"}
                  />
                </View>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("OTPScreen");
                  }}
                  style={styles.googleButton}
                >
                  <Text style={styles.googleButtonText}>Login Via Google</Text>
                </TouchableOpacity>
              </Glassmorphism>
            )}
          </Formik>

          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipButtonText}>Skip for now ≫</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    marginTop: 60,
  },
  subtitle: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 40,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    padding: 20,
    overflow: "hidden",
  },
  inputLabel: {
    color: "#999",
    marginBottom: 12,
  },
  below: {
    color: "#999",
    marginBottom: 35,
    fontSize: 12,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 25,
    color: "#fff",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sendOtpButton: {
    backgroundColor: "#95c11f",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  sendOtpText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  googleButton: {
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#666",
  },
  googleButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  skipButton: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
  },
  skipButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default GradientHOC(LoginScreen);
