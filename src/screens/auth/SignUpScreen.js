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
import Glassmorphism from "../../components/Glassmorphism";
import CommonButton from "../../components/CommonButton";
import { GradientHOC } from "../../HOC/GradientHOC";

const SignUpScreen = ({ navigation }) => {
  const [focusInput, setFocusInput] = useState(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>
            Please enter your details to Login
          </Text>
        </View>
        <Formik
          initialValues={{
            user_name: "",
            mobile_no: "",
            email_id: "",
            pan_no: "",
            aadhar_no: "",
          }}
          onSubmit={(values) => {
            navigation.navigate("OTPScreen");
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
            <Glassmorphism height={"79%"}>
              <Text style={styles.below}>
                Enter your details to register with us
              </Text>
              <SafeAreaView>
                <Text style={styles.inputLabel}>Username</Text>
                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor:
                        focusInput === "user_name" ? "#fff" : "#ffffff10",
                    },
                  ]}
                  value={values.user_name}
                  onChangeText={handleChange("user_name")}
                  onBlur={() => {
                    handleBlur("user_name");
                    setFocusInput(null);
                  }}
                  onFocus={() => {
                    setFocusInput("user_name");
                  }}
                />
                {errors.user_name && touched.user_name && (
                  <Text style={styles.errorText}>{errors.user_name}</Text>
                )}
              </SafeAreaView>

              <SafeAreaView>
                <Text style={styles.inputLabel}>Mobile No</Text>
                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor:
                        focusInput === "mobile_no" ? "#fff" : "#ffffff10",
                    },
                  ]}
                  value={values.mobile_no}
                  onChangeText={handleChange("mobile_no")}
                  onBlur={() => {
                    handleBlur("mobile_no");
                    setFocusInput(null);
                  }}
                  onFocus={() => {
                    setFocusInput("mobile_no");
                  }}
                />
                {errors.mobile_no && touched.mobile_no && (
                  <Text style={styles.errorText}>{errors.mobile_no}</Text>
                )}
              </SafeAreaView>
              <SafeAreaView>
                <Text style={styles.inputLabel}>E-mail</Text>
                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor:
                        focusInput === "email_id" ? "#fff" : "#ffffff10",
                    },
                  ]}
                  value={values.email_id}
                  onChangeText={handleChange("email_id")}
                  onBlur={() => {
                    handleBlur("email_id");
                    setFocusInput(null);
                  }}
                  onFocus={() => {
                    setFocusInput("email_id");
                  }}
                />
                {errors.email_id && touched.email_id && (
                  <Text style={styles.errorText}>{errors.email_id}</Text>
                )}
              </SafeAreaView>
              <SafeAreaView>
                <Text style={styles.inputLabel}>PAN No</Text>
                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor:
                        focusInput === "pan_no" ? "#fff" : "#ffffff10",
                    },
                  ]}
                  value={values.pan_no}
                  onChangeText={handleChange("pan_no")}
                  onBlur={() => {
                    handleBlur("pan_no");
                    setFocusInput(null);
                  }}
                  onFocus={() => {
                    setFocusInput("pan_no");
                  }}
                />
                {errors.pan_no && touched.pan_no && (
                  <Text style={styles.errorText}>{errors.pan_no}</Text>
                )}
              </SafeAreaView>
              <SafeAreaView>
                <Text style={styles.inputLabel}>Aadhar No</Text>
                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor:
                        focusInput === "aadhar_no" ? "#fff" : "#ffffff10",
                    },
                  ]}
                  value={values.aadhar_no}
                  onChangeText={handleChange("aadhar_no")}
                  onBlur={() => {
                    handleBlur("aadhar_no");
                    setFocusInput(null);
                  }}
                  onFocus={() => {
                    setFocusInput("aadhar_no");
                  }}
                />
                {errors.aadhar_no && touched.aadhar_no && (
                  <Text style={styles.errorText}>{errors.aadhar_no}</Text>
                )}
              </SafeAreaView>
              <View style={{ marginBottom: 10 }}>
                <CommonButton
                  title={"Register"}
                  onPress={handleSubmit}
                  width={"100%"}
                />
              </View>

              <View style={styles.notRegisterContainer}>
                <Text style={styles.subtitleNot}>Already a user?</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("LoginScreen");
                  }}
                >
                  <Text style={styles.createAccount}>Login</Text>
                </TouchableOpacity>
              </View>
            </Glassmorphism>
          )}
        </Formik>
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
    marginTop: 30,
  },
  subtitle: {
    fontSize: 12,
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

export default GradientHOC(SignUpScreen);
