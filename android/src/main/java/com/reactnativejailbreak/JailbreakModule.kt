package com.reactnativejailbreak

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.scottyab.rootbeer.RootBeer;
import com.scottyab.rootbeer.util.Utils;

class JailbreakModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    val rootBeer =  RootBeer(reactContext);
    override fun getName(): String {
        return "Jailbreak"
    }

    // Example method
    // See https://reactnative.dev/docs/native-modules-android
    @ReactMethod
    fun check(promise: Promise) {
     if (rootBeer.isRooted()) {
    //we found indication of root
     promise.resolve(true)
     } else {
    //we didn't find indication of root
     promise.resolve(false)
     }
    }

}