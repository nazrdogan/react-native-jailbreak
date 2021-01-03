#import "Jailbreak.h"
#import <DTTJailbreakDetection/DTTJailbreakDetection.h>

@implementation Jailbreak

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(check:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
 if ([DTTJailbreakDetection isJailbroken]) {
    resolve(@(YES));
  } else {
    resolve(@(NO));
  }
}


@end