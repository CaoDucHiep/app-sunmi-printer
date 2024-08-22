
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNSunmiV2PrinterSpec.h"

@interface SunmiV2Printer : NSObject <NativeSunmiV2PrinterSpec>
#else
#import <React/RCTBridgeModule.h>

@interface SunmiV2Printer : NSObject <RCTBridgeModule>
#endif

@end
