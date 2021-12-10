'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ChannelHeaders = void 0;
var ChannelHeaders;
(function(ChannelHeaders) {
  ChannelHeaders['ChannelState'] = 'Channel-State';
  ChannelHeaders['ChannelStateNumber'] = 'Channel-State-Number';
  ChannelHeaders['ChannelName'] = 'Channel-Name';
  ChannelHeaders['UniqueID'] = 'Unique-ID';
  ChannelHeaders['CallDirection'] = 'Call-Direction';
  ChannelHeaders['AnswerState'] = 'Answer-State';
  ChannelHeaders['ChannelReadCodecName'] = 'Channel-Read-Codec-Name';
  ChannelHeaders['ChannelReadCodecRate'] = 'Channel-Read-Codec-Rate';
  ChannelHeaders['ChannelWriteCodecName'] = 'Channel-Write-Codec-Name';
  ChannelHeaders['ChannelWriteCodecRate'] = 'Channel-Write-Codec-Rate';
  ChannelHeaders['CallerUsername'] = 'Caller-Username';
  ChannelHeaders['CallerDialplan'] = 'Caller-Dialplan';
  ChannelHeaders['CallerCallerIDName'] = 'Caller-Caller-ID-Name';
  ChannelHeaders['CallerCallerIDNumber'] = 'Caller-Caller-ID-Number';
  ChannelHeaders['CallerANI'] = 'Caller-ANI';
  ChannelHeaders['CallerANIII'] = 'Caller-ANI-II';
  ChannelHeaders['CallerNetworkAddr'] = 'Caller-Network-Addr';
  ChannelHeaders['CallerDestinationNumber'] = 'Caller-Destination-Number';
  ChannelHeaders['CallerUniqueID'] = 'Caller-Unique-ID';
  ChannelHeaders['CallerSource'] = 'Caller-Source';
  ChannelHeaders['CallerContext'] = 'Caller-Context';
  ChannelHeaders['CallerRDNIS'] = 'Caller-RDNIS';
  ChannelHeaders['CallerChannelName'] = 'Caller-Channel-Name';
  ChannelHeaders['CallerProfileIndex'] = 'Caller-Profile-Index';
  ChannelHeaders['CallerChannelCreatedTime'] = 'Caller-Channel-Created-Time';
  ChannelHeaders['CallerChannelAnsweredTime'] = 'Caller-Channel-Answered-Time';
  ChannelHeaders['CallerChannelHangupTime'] = 'Caller-Channel-Hangup-Time';
  ChannelHeaders['CallerChannelTransferTime'] = 'Caller-Channel-Transfer-Time';
  ChannelHeaders['CallerScreenBit'] = 'Caller-Screen-Bit';
  ChannelHeaders['CallerPrivacyHideName'] = 'Caller-Privacy-Hide-Name';
  ChannelHeaders['CallerPrivacyHideNumber'] = 'Caller-Privacy-Hide-Number';
  ChannelHeaders['variable_sip_received_ip'] = 'variable_sip_received_ip';
  ChannelHeaders['variable_sip_received_port'] = 'variable_sip_received_port';
  ChannelHeaders['variable_sip_authorized'] = 'variable_sip_authorized';
  ChannelHeaders['variable_sip_mailbox'] = 'variable_sip_mailbox';
  ChannelHeaders['variable_sip_auth_username'] = 'variable_sip_auth_username';
  ChannelHeaders['variable_sip_auth_realm'] = 'variable_sip_auth_realm';
  ChannelHeaders['variable_mailbox'] = 'variable_mailbox';
  ChannelHeaders['variable_user_name'] = 'variable_user_name';
  ChannelHeaders['variable_domain_name'] = 'variable_domain_name';
  ChannelHeaders['variable_record_stereo'] = 'variable_record_stereo';
  ChannelHeaders['variable_accountcode'] = 'variable_accountcode';
  ChannelHeaders['variable_user_context'] = 'variable_user_context';
  ChannelHeaders['variable_effective_caller_id_name'] = 'variable_effective_caller_id_name';
  ChannelHeaders['variable_effective_caller_id_number'] = 'variable_effective_caller_id_number';
  ChannelHeaders['variable_caller_domain'] = 'variable_caller_domain';
  ChannelHeaders['variable_sip_from_user'] = 'variable_sip_from_user';
  ChannelHeaders['variable_sip_from_uri'] = 'variable_sip_from_uri';
  ChannelHeaders['variable_sip_from_host'] = 'variable_sip_from_host';
  ChannelHeaders['variable_sip_from_user_stripped'] = 'variable_sip_from_user_stripped';
  ChannelHeaders['variable_sip_from_tag'] = 'variable_sip_from_tag';
  ChannelHeaders['variable_sofia_profile_name'] = 'variable_sofia_profile_name';
  ChannelHeaders['variable_sofia_profile_domain_name'] = 'variable_sofia_profile_domain_name';
  ChannelHeaders['variable_sip_full_route'] = 'variable_sip_full_route';
  ChannelHeaders['variable_sip_full_via'] = 'variable_sip_full_via';
  ChannelHeaders['variable_sip_full_from'] = 'variable_sip_full_from';
  ChannelHeaders['variable_sip_full_to'] = 'variable_sip_full_to';
  ChannelHeaders['variable_sip_req_params'] = 'variable_sip_req_params';
  ChannelHeaders['variable_sip_req_user'] = 'variable_sip_req_user';
  ChannelHeaders['variable_sip_req_uri'] = 'variable_sip_req_uri';
  ChannelHeaders['variable_sip_req_host'] = 'variable_sip_req_host';
  ChannelHeaders['variable_sip_to_params'] = 'variable_sip_to_params';
  ChannelHeaders['variable_sip_to_tag'] = 'variable_sip_to_tag';
  ChannelHeaders['variable_sip_to_user'] = 'variable_sip_to_user';
  ChannelHeaders['variable_sip_to_uri'] = 'variable_sip_to_uri';
  ChannelHeaders['variable_sip_to_host'] = 'variable_sip_to_host';
  ChannelHeaders['variable_sip_contact_params'] = 'variable_sip_contact_params';
  ChannelHeaders['variable_sip_contact_user'] = 'variable_sip_contact_user';
  ChannelHeaders['variable_sip_contact_port'] = 'variable_sip_contact_port';
  ChannelHeaders['variable_sip_contact_uri'] = 'variable_sip_contact_uri';
  ChannelHeaders['variable_sip_contact_host'] = 'variable_sip_contact_host';
  ChannelHeaders['variable_sip_invite_domain'] = 'variable_sip_invite_domain';
  ChannelHeaders['variable_channel_name'] = 'variable_channel_name';
  ChannelHeaders['variable_sip_call_id'] = 'variable_sip_call_id';
  ChannelHeaders['variable_sip_user_agent'] = 'variable_sip_user_agent';
  ChannelHeaders['variable_sip_via_host'] = 'variable_sip_via_host';
  ChannelHeaders['variable_sip_via_port'] = 'variable_sip_via_port';
  ChannelHeaders['variable_sip_via_rport'] = 'variable_sip_via_rport';
  ChannelHeaders['variable_presence_id'] = 'variable_presence_id';
  ChannelHeaders['variable_sip_h_PKeyFlags'] = 'variable_sip_h_P-Key-Flags';
  ChannelHeaders['variable_switch_r_sdp'] = 'variable_switch_r_sdp';
  ChannelHeaders['variable_remote_media_ip'] = 'variable_remote_media_ip';
  ChannelHeaders['variable_remote_media_port'] = 'variable_remote_media_port';
  ChannelHeaders['variable_write_codec'] = 'variable_write_codec';
  ChannelHeaders['variable_write_rate'] = 'variable_write_rate';
  ChannelHeaders['variable_endpoint_disposition'] = 'variable_endpoint_disposition';
  ChannelHeaders['variable_dialed_ext'] = 'variable_dialed_ext';
  ChannelHeaders['variable_transfer_ringback'] = 'variable_transfer_ringback';
  ChannelHeaders['variable_call_timeout'] = 'variable_call_timeout';
  ChannelHeaders['variable_hangup_after_bridge'] = 'variable_hangup_after_bridge';
  ChannelHeaders['variable_continue_on_fail'] = 'variable_continue_on_fail';
  ChannelHeaders['variable_dialed_user'] = 'variable_dialed_user';
  ChannelHeaders['variable_dialed_domain'] = 'variable_dialed_domain';
  ChannelHeaders['variable_sip_redirect_contact_user_0'] = 'variable_sip_redirect_contact_user_0';
  ChannelHeaders['variable_sip_redirect_contact_host_0'] = 'variable_sip_redirect_contact_host_0';
  ChannelHeaders['variable_sip_h_ReferredBy'] = 'variable_sip_h_Referred-By';
  ChannelHeaders['variable_sip_refer_to'] = 'variable_sip_refer_to';
  ChannelHeaders['variable_max_forwards'] = 'variable_max_forwards';
  ChannelHeaders['variable_originate_disposition'] = 'variable_originate_disposition';
  ChannelHeaders['variable_read_codec'] = 'variable_read_codec';
  ChannelHeaders['variable_read_rate'] = 'variable_read_rate';
  ChannelHeaders['variable_open'] = 'variable_open';
  ChannelHeaders['variable_use_profile'] = 'variable_use_profile';
  ChannelHeaders['variable_current_application'] = 'variable_current_application';
  ChannelHeaders['variable_ep_codec_string'] = 'variable_ep_codec_string';
  ChannelHeaders['variable_rtp_disable_hold'] = 'variable_rtp_disable_hold';
  ChannelHeaders['variable_sip_acl_authed_by'] = 'variable_sip_acl_authed_by';
  ChannelHeaders['variable_curl_response_data'] = 'variable_curl_response_data';
  ChannelHeaders['variable_drop_dtmf'] = 'variable_drop_dtmf';
  ChannelHeaders['variable_drop_dtmf_masking_file'] = 'variable_drop_dtmf_masking_file';
  ChannelHeaders['variable_drop_dtmf_masking_digits'] = 'variable_drop_dtmf_masking_digits';
  ChannelHeaders['sip_codec_negotiation'] = 'sip_codec_negotiation';
  ChannelHeaders['CallerCalleeIDName'] = 'Caller-Callee-ID-Name';
  ChannelHeaders['CallerCalleeIDNumber'] = 'Caller-Callee-ID-Number';
  ChannelHeaders['CallerChannelProgressMediaTime'] = 'Caller-Channel-Progress-Media-Time';
  ChannelHeaders['CallerChannelProgressTime'] = 'Caller-Channel-Progress-Time';
  ChannelHeaders['CallerDirection'] = 'Caller-Direction';
  ChannelHeaders['CallerProfileCreatedTime'] = 'Caller-Profile-Created-Time';
  ChannelHeaders['CallerTransferSource'] = 'Caller-Transfer-Source';
  ChannelHeaders['ChannelCallState'] = 'Channel-Call-State';
  ChannelHeaders['ChannelCallUUID'] = 'Channel-Call-UUID';
  ChannelHeaders['ChannelHITDialplan'] = 'Channel-HIT-Dialplan';
  ChannelHeaders['ChannelReadCodecBitRate'] = 'Channel-Read-Codec-Bit-Rate';
  ChannelHeaders['ChannelWriteCodecBitRate'] = 'Channel-Write-Codec-Bit-Rate';
  ChannelHeaders['CoreUUID'] = 'Core-UUID';
  ChannelHeaders['EventCallingFile'] = 'Event-Calling-File';
  ChannelHeaders['EventCallingFunction'] = 'Event-Calling-Function';
  ChannelHeaders['EventCallingLineNumber'] = 'Event-Calling-Line-Number';
  ChannelHeaders['EventDateGMT'] = 'Event-Date-GMT';
  ChannelHeaders['EventDateLocal'] = 'Event-Date-Local';
  ChannelHeaders['EventDateTimestamp'] = 'Event-Date-Timestamp';
  ChannelHeaders['EventName'] = 'Event-Name';
  ChannelHeaders['EventSequence'] = 'Event-Sequence';
  ChannelHeaders['FreeSWITCHHostname'] = 'FreeSWITCH-Hostname';
  ChannelHeaders['FreeSWITCHIPv4'] = 'FreeSWITCH-IPv4';
  ChannelHeaders['FreeSWITCHIPv6'] = 'FreeSWITCH-IPv6';
  ChannelHeaders['FreeSWITCHSwitchname'] = 'FreeSWITCH-Switchname';
  ChannelHeaders['HuntANI'] = 'Hunt-ANI';
  ChannelHeaders['HuntCalleeIDName'] = 'Hunt-Callee-ID-Name';
  ChannelHeaders['HuntCalleeIDNumber'] = 'Hunt-Callee-ID-Number';
  ChannelHeaders['HuntCallerIDName'] = 'Hunt-Caller-ID-Name';
  ChannelHeaders['HuntCallerIDNumber'] = 'Hunt-Caller-ID-Number';
  ChannelHeaders['HuntChannelAnsweredTime'] = 'Hunt-Channel-Answered-Time';
  ChannelHeaders['HuntChannelCreatedTime'] = 'Hunt-Channel-Created-Time';
  ChannelHeaders['HuntChannelHangupTime'] = 'Hunt-Channel-Hangup-Time';
  ChannelHeaders['HuntChannelName'] = 'Hunt-Channel-Name';
  ChannelHeaders['HuntChannelProgressMediaTime'] = 'Hunt-Channel-Progress-Media-Time';
  ChannelHeaders['HuntChannelProgressTime'] = 'Hunt-Channel-Progress-Time';
  ChannelHeaders['HuntChannelTransferTime'] = 'Hunt-Channel-Transfer-Time';
  ChannelHeaders['HuntContext'] = 'Hunt-Context';
  ChannelHeaders['HuntDestinationNumber'] = 'Hunt-Destination-Number';
  ChannelHeaders['HuntDialplan'] = 'Hunt-Dialplan';
  ChannelHeaders['HuntDirection'] = 'Hunt-Direction';
  ChannelHeaders['HuntNetworkAddr'] = 'Hunt-Network-Addr';
  ChannelHeaders['HuntPrivacyHideName'] = 'Hunt-Privacy-Hide-Name';
  ChannelHeaders['HuntPrivacyHideNumber'] = 'Hunt-Privacy-Hide-Number';
  ChannelHeaders['HuntProfileCreatedTime'] = 'Hunt-Profile-Created-Time';
  ChannelHeaders['HuntProfileIndex'] = 'Hunt-Profile-Index';
  ChannelHeaders['HuntRDNIS'] = 'Hunt-RDNIS';
  ChannelHeaders['HuntScreenBit'] = 'Hunt-Screen-Bit';
  ChannelHeaders['HuntSource'] = 'Hunt-Source';
  ChannelHeaders['HuntTransferSource'] = 'Hunt-Transfer-Source';
  ChannelHeaders['HuntUniqueID'] = 'Hunt-Unique-ID';
  ChannelHeaders['HuntUsername'] = 'Hunt-Username';
  ChannelHeaders['PresenceCallDirection'] = 'Presence-Call-Direction';
  ChannelHeaders['variable_DIALSTATUS'] = 'variable_DIALSTATUS';
  ChannelHeaders['variable_absolute_codec_string'] = 'variable_absolute_codec_string';
  ChannelHeaders['variable_advertised_media_ip'] = 'variable_advertised_media_ip';
  ChannelHeaders['variable_answersec'] = 'variable_answersec';
  ChannelHeaders['variable_answermsec'] = 'variable_answermsec';
  ChannelHeaders['variable_answerusec'] = 'variable_answerusec';
  ChannelHeaders['variable_billsec'] = 'variable_billsec';
  ChannelHeaders['variable_billmsec'] = 'variable_billmsec';
  ChannelHeaders['variable_billusec'] = 'variable_billusec';
  ChannelHeaders['variable_bridge_channel'] = 'variable_bridge_channel';
  ChannelHeaders['variable_bridge_hangup_cause'] = 'variable_bridge_hangup_cause';
  ChannelHeaders['variable_bridge_uuid'] = 'variable_bridge_uuid';
  ChannelHeaders['variable_call_uuid'] = 'variable_call_uuid';
  ChannelHeaders['variable_current_application_response'] = 'variable_current_application_response';
  ChannelHeaders['variable_direction'] = 'variable_direction';
  ChannelHeaders['variable_duration'] = 'variable_duration';
  ChannelHeaders['variable_mduration'] = 'variable_mduration';
  ChannelHeaders['variable_uduration'] = 'variable_uduration';
  ChannelHeaders['variable_inherit_codec'] = 'variable_inherit_codec';
  ChannelHeaders['variable_is_outbound'] = 'variable_is_outbound';
  ChannelHeaders['variable_last_bridge_to'] = 'variable_last_bridge_to';
  ChannelHeaders['variable_last_sent_callee_id_name'] = 'variable_last_sent_callee_id_name';
  ChannelHeaders['variable_last_sent_callee_id_number'] = 'variable_last_sent_callee_id_number';
  ChannelHeaders['variable_local_media_ip'] = 'variable_local_media_ip';
  ChannelHeaders['variable_local_media_port'] = 'variable_local_media_port';
  ChannelHeaders['variable_number_alias'] = 'variable_number_alias';
  ChannelHeaders['variable_originate_early_media'] = 'variable_originate_early_media';
  ChannelHeaders['variable_originating_leg_uuid'] = 'variable_originating_leg_uuid';
  ChannelHeaders['variable_originator'] = 'variable_originator';
  ChannelHeaders['variable_originator_codec'] = 'variable_originator_codec';
  ChannelHeaders['variable_outbound_caller_id_number'] = 'variable_outbound_caller_id_number';
  ChannelHeaders['variable_progresssec'] = 'variable_progresssec';
  ChannelHeaders['variable_progressmsec'] = 'variable_progressmsec';
  ChannelHeaders['variable_progressusec'] = 'variable_progressusec';
  ChannelHeaders['variable_progress_mediasec'] = 'variable_progress_mediasec';
  ChannelHeaders['variable_progress_mediamsec'] = 'variable_progress_mediamsec';
  ChannelHeaders['variable_progress_mediausec'] = 'variable_progress_mediausec';
  ChannelHeaders['variable_recovery_profile_name'] = 'variable_recovery_profile_name';
  ChannelHeaders['variable_rtp_use_ssrc'] = 'variable_rtp_use_ssrc';
  ChannelHeaders['variable_session_id'] = 'variable_session_id';
  ChannelHeaders['variable_sip_2833_recv_payload'] = 'variable_sip_2833_recv_payload';
  ChannelHeaders['variable_sip_2833_send_payload'] = 'variable_sip_2833_send_payload';
  ChannelHeaders['variable_sip_PAssertedIdentity'] = 'variable_sip_P-Asserted-Identity';
  ChannelHeaders['variable_sip_Privacy'] = 'variable_sip_Privacy';
  ChannelHeaders['variable_sip_audio_recv_pt'] = 'variable_sip_audio_recv_pt';
  ChannelHeaders['variable_sip_cid_type'] = 'variable_sip_cid_type';
  ChannelHeaders['variable_sip_cseq'] = 'variable_sip_cseq';
  ChannelHeaders['variable_sip_destination_url'] = 'variable_sip_destination_url';
  ChannelHeaders['variable_sip_from_display'] = 'variable_sip_from_display';
  ChannelHeaders['variable_sip_from_port'] = 'variable_sip_from_port';
  ChannelHeaders['variable_sip_gateway'] = 'variable_sip_gateway';
  ChannelHeaders['variable_sip_gateway_name'] = 'variable_sip_gateway_name';
  ChannelHeaders['variable_sip_h_PChargingVector'] = 'variable_sip_h_P-Charging-Vector';
  ChannelHeaders['variable_sip_local_network_addr'] = 'variable_sip_local_network_addr';
  ChannelHeaders['variable_sip_local_sdp_str'] = 'variable_sip_local_sdp_str';
  ChannelHeaders['variable_sip_network_ip'] = 'variable_sip_network_ip';
  ChannelHeaders['variable_sip_network_port'] = 'variable_sip_network_port';
  ChannelHeaders['variable_sip_number_alias'] = 'variable_sip_number_alias';
  ChannelHeaders['variable_sip_outgoing_contact_uri'] = 'variable_sip_outgoing_contact_uri';
  ChannelHeaders['variable_sip_ph_PChargingVector'] = 'variable_sip_ph_P-Charging-Vector';
  ChannelHeaders['variable_sip_profile_name'] = 'variable_sip_profile_name';
  ChannelHeaders['variable_sip_recover_contact'] = 'variable_sip_recover_contact';
  ChannelHeaders['variable_sip_recover_via'] = 'variable_sip_recover_via';
  ChannelHeaders['variable_sip_reply_host'] = 'variable_sip_reply_host';
  ChannelHeaders['variable_sip_reply_port'] = 'variable_sip_reply_port';
  ChannelHeaders['variable_sip_req_port'] = 'variable_sip_req_port';
  ChannelHeaders['variable_sip_to_port'] = 'variable_sip_to_port';
  ChannelHeaders['variable_sip_use_codec_name'] = 'variable_sip_use_codec_name';
  ChannelHeaders['variable_sip_use_codec_ptime'] = 'variable_sip_use_codec_ptime';
  ChannelHeaders['variable_sip_use_codec_rate'] = 'variable_sip_use_codec_rate';
  ChannelHeaders['variable_sip_use_pt'] = 'variable_sip_use_pt';
  ChannelHeaders['variable_sip_via_protocol'] = 'variable_sip_via_protocol';
  ChannelHeaders['variable_switch_m_sdp'] = 'variable_switch_m_sdp';
  ChannelHeaders['variable_transfer_history'] = 'variable_transfer_history';
  ChannelHeaders['variable_transfer_source'] = 'variable_transfer_source';
  ChannelHeaders['variable_uuid'] = 'variable_uuid';
  ChannelHeaders['variable_waitsec'] = 'variable_waitsec';
  ChannelHeaders['variable_waitmsec'] = 'variable_waitmsec';
  ChannelHeaders['variable_waitusec'] = 'variable_waitusec';
})(ChannelHeaders = exports.ChannelHeaders || (exports.ChannelHeaders = {}));
//# sourceMappingURL=esl-headers.js.map