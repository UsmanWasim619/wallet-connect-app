import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
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
  const [focusInput, setFocusInput] = useState(false);

  return (
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
            <Glassmorphism height={400}>
              <Text style={styles.below}>
                Enter your username or mobile no below
              </Text>
              <Text style={styles.inputLabel}>Username / Mobile No.</Text>
              <TextInput
                style={[
                  styles.input,
                  { borderColor: focusInput ? "#fff" : "#ffffff10" },
                ]}
                value={values.username}
                onChangeText={handleChange("username")}
                onBlur={() => {
                  handleBlur("username");
                  setFocusInput(false);
                }}
                onFocus={() => {
                  setFocusInput(true);
                }}
              />
              {errors.username && touched.username && (
                <Text style={styles.errorText}>{errors.username}</Text>
              )}
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

              <View style={styles.notRegisterContainer}>
                <Text style={styles.subtitleNot}>Not a registered user?</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("SignUpScreen");
                  }}
                >
                  <Text style={styles.createAccount}>Create an account</Text>
                </TouchableOpacity>
              </View>
            </Glassmorphism>
          )}
        </Formik>
        <KeyboardAvoidingView behavior="position" style={styles.skipButton}>
          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipButtonText}>Skip for now ≫</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  notRegisterContainer: {
    flexDirection: "row",
    marginTop: "5%",
    justifyContent: "center",
    alignItems:"center",
    gap: 5,
  },

  subtitleNot: {
    fontSize: 12,
    fontWeight: "300",
    lineHeight: 15,
    color: "#017482",
  },

  createAccount: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    color: "#ffffff",
  },

  safeArea: {
    flex: 1,
    zIndex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    marginTop: 60,
  },
  subtitle: {
    fontSize: 12,
    color: "#A1A1A1",
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
    color: "#017482",
    marginBottom: 12,
  },
  below: {
    color: "#ffffff",
    marginBottom: 35,
    fontSize: 12,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ffffff10",
    borderRadius: 25,
    color: "#fff",
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#ffffff10",
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
    borderColor: "#017482",
  },
  googleButtonText: {
    color: "#017482",
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
