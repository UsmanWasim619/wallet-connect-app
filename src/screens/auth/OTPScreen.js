import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { OtpInput } from "react-native-otp-entry";
import Glassmorphism from "../../components/Glassmorphism";
import CommonButton from "../../components/CommonButton";
import { GradientHOC } from "../../HOC/GradientHOC";

// Validation Schema
const validationSchema = Yup.object().shape({
  otp: Yup.string()
    .required("OTP is required")
    .matches(/^[0-9]{6}$/, "OTP must be 6 digits"),
});

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setOtp(numericValue);
  };

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
            initialValues={{ otp: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values.otp);
            }}
          >
            {({ handleSubmit, errors, touched, setFieldValue }) => (
              <Glassmorphism height={370}>
                <Text style={styles.instruction}>
                  Enter the OTP sent on mobile no 917XXXXXXX
                </Text>

                <Text style={styles.otpLabel}>Enter OTP</Text>

                <OtpInput
                  numberOfDigits={6}
                  type="numeric"
                  secureTextEntry={false}
                  onTextChange={(text) => {
                    handleOtpChange(text);
                    setFieldValue("otp", text);
                  }}
                  value={otp}
                  keyboardType="number-pad"
                  theme={{
                    containerStyle: styles.otpContainer,
                    inputsContainerStyle: styles.otpInputsContainer,
                    pinCodeContainerStyle: styles.otpCell,
                    pinCodeTextStyle: styles.otpText,
                    focusStickStyle: styles.otpCellFocused,
                  }}
                />

                {touched.otp && errors.otp && (
                  <Text style={styles.errorText}>{errors.otp}</Text>
                )}

                {/* <TouchableOpacity
                  style={styles.loginButton}
                  onPress={() => handleSubmit()}
                >
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity> */}

                {/* <View style={{ marginBottom: 15 }}> */}
                <CommonButton
                  title={"Login"}
                  // onPress={handleSubmit}
                  onPress={() => {
                    navigation.navigate("Dashboard");
                  }}
                  width={"100%"}
                />
                {/* </View> */}
              </Glassmorphism>
            )}
          </Formik>
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
  instruction: {
    color: "#999",
    marginBottom: 20,
  },
  otpLabel: {
    fontSize: 14,
    color: "#cccccc",
    marginBottom: 12,
  },
  otpContainer: {
    marginBottom: 24,
  },
  otpInputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  otpCell: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 8,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  otpCellFocused: {
    borderColor: "#98c73d",
    borderWidth: 2,
  },
  otpText: {
    color: "#ffffff",
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: "#95c11f",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
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
  errorText: {
    color: "#ff6b6b",
    fontSize: 14,
    marginTop: -20,
    marginBottom: 10,
  },
});

export default GradientHOC(OtpScreen);
