import { Text, View, Modal, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'

export default function Loading({ visible }) {
    return (
        <Modal trasparent visible={visible}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator
                    size="large"
                    color="#F98A4B"
                    animating={true}
                />
            </View>
        </Modal>
    )
}