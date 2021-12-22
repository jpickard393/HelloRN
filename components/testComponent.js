
import type { Node } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    highlight: {
        fontWeight: '700',
    },
});

const TestCompent: () => Node = Platform.select({
    ios: () => (
        <Text>
            Hello IOS from the TestComponent
        </Text>
    ),
    android: () => (
        <Text>
            Hello Android from the TestComponent
        </Text>
    ),
});

export default TestCompent;
