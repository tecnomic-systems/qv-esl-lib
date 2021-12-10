export declare enum EslEvents {
  CONNECTION_READY = 'connection::ready',
  CONNECTION_OPEN = 'connection::open',
  CONNECTION_CLOSE = 'connection::close',
  ADD_SCHEDULE = 'esl::event::ADD_SCHEDULE::*',
  API = 'esl::event::API::*',
  BACKGROUND_JOB = 'esl::event::BACKGROUND_JOB::*',
  CALL_DETAIL = 'esl::event::CALL_DETAIL::*',
  CALL_SECURE = 'esl::event::CALL_SECURE::*',
  CALL_SETUP_REQ = 'esl::event::CALL_SETUP_REQ::*',
  CALL_UPDATE = 'esl::event::CALL_UPDATE::*',
  CDR = 'esl::event::CDR::*',
  CHANNEL_ANSWER = 'esl::event::CHANNEL_ANSWER::*',
  CHANNEL_APPLICATION = 'esl::event::CHANNEL_APPLICATION::*',
  CHANNEL_BRIDGE = 'esl::event::CHANNEL_BRIDGE`::*',
  CHANNEL_CALLSTATE = 'esl::event::CHANNEL_CALLSTATE::*',
  CHANNEL_CREATE = 'esl::event::CHANNEL_CREATE::*',
  CHANNEL_DATA = 'esl::event::CHANNEL_DATA::*',
  CHANNEL_DESTROY = 'esl::event::CHANNEL_DESTROY::*',
  CHANNEL_EXECUTE = 'esl::event::CHANNEL_EXECUTE::*',
  CHANNEL_EXECUTE_COMPLETE = 'esl::event::CHANNEL_EXECUTE_COMPLETE::*',
  CHANNEL_GLOBAL = 'esl::event::CHANNEL_GLOBAL::*',
  CHANNEL_HANGUP = 'esl::event::CHANNEL_HANGUP::*',
  CHANNEL_HANGUP_COMPLETE = 'esl::event::CHANNEL_HANGUP_COMPLETE::*',
  CHANNEL_HOLD = 'esl::event::CHANNEL_HOLD::*',
  CHANNEL_ORIGINATE = 'esl::event::CHANNEL_ORIGINATE::*',
  CHANNEL_OUTGOING = 'esl::event::CHANNEL_OUTGOING::*',
  CHANNEL_PARK = 'esl::event::CHANNEL_PARK::*',
  CHANNEL_PROGRESS = 'esl::event::CHANNEL_PROGRESS::*',
  CHANNEL_PROGRESS_MEDIA = 'esl::event::CHANNEL_PROGRESS_MEDIA::*',
  CHANNEL_STATE = 'esl::event::CHANNEL_STATE::*',
  CHANNEL_UNBRIDGE = 'esl::event::CHANNEL_UNBRIDGE::*',
  CHANNEL_UNHOLD = 'esl::event::CHANNEL_UNHOLD::*',
  CHANNEL_UNPARK = 'esl::event::CHANNEL_UNPARK::*',
  CHANNEL_UUID = 'esl::event::CHANNEL_UUID::*',
  CLONE = 'esl::event::CLONE::*',
  CODEC = 'esl::event::CODEC::*',
  COMMAND = 'esl::event::COMMAND::*',
  CONFERENCE_DATA = 'esl::event::CONFERENCE_DATA::*',
  CONFERENCE_DATA_QUERY = 'esl::event::CONFERENCE_DATA_QUERY::*',
  CUSTOM = 'esl::event::CUSTOM::*',
  DEL_SCHEDULE = 'esl::event::DEL_SCHEDULE::*',
  DETECTED_SPEECH = 'esl::event::DETECTED_SPEECH::*',
  DETECTED_TONE = 'esl::event::DETECTED_TONE::*',
  DEVICE_STATE = 'esl::event::DEVICE_STATE::*',
  DTMF = 'esl::event::DTMF::*',
  EXE_SCHEDULE = 'esl::event::EXE_SCHEDULE::*',
  FAILURE = 'esl::event::FAILURE::*',
  GENERAL = 'esl::event::GENERAL::*',
  HEARTBEAT = 'esl::event::HEARTBEAT::*',
  LOG = 'esl::event::LOG::*',
  MEDIA_BUG_START = 'esl::event::MEDIA_BUG_START::*',
  MEDIA_BUG_STOP = 'esl::event::MEDIA_BUG_STOP::*',
  MESSAGE = 'esl::event::MESSAGE::*',
  MESSAGE_QUERY = 'esl::event::MESSAGE_QUERY::*',
  MESSAGE_WAITING = 'esl::event::MESSAGE_WAITING::*',
  MODULE_LOAD = 'esl::event::MODULE_LOAD::*',
  MODULE_UNLOAD = 'esl::event::MODULE_UNLOAD::*',
  NAT = 'esl::event::NAT::*',
  NOTALK = 'esl::event::NOTALK::*',
  NOTIFY = 'esl::event::NOTIFY::*',
  NOTIFY_IN = 'esl::event::NOTIFY_IN::*',
  PHONE_FEATURE = 'esl::event::PHONE_FEATURE::*',
  PHONE_FEATURE_SUBSCRIBE = 'esl::event::PHONE_FEATURE_SUBSCRIBE::*',
  PLAYBACK_START = 'esl::event::PLAYBACK_START::*',
  PLAYBACK_STOP = 'esl::event::PLAYBACK_STOP::*',
  PRESENCE_IN = 'esl::event::PRESENCE_IN::*',
  PRESENCE_OUT = 'esl::event::PRESENCE_OUT::*',
  PRESENCE_PROBE = 'esl::event::PRESENCE_PROBE::*',
  PRIVATE_COMMAND = 'esl::event::PRIVATE_COMMAND::*',
  PUBLISH = 'esl::event::PUBLISH::*',
  QUEUE_LEN = 'esl::event::QUEUE_LEN::*',
  RECORD_START = 'esl::event::RECORD_START::*',
  RECORD_STOP = 'esl::event::RECORD_STOP::*',
  RECV_INFO = 'esl::event::RECV_INFO::*',
  RECV_MESSAGE = 'esl::event::RECV_MESSAGE::*',
  RECV_RTCP_MESSAGE = 'esl::event::RECV_RTCP_MESSAGE::*',
  RECYCLE = 'esl::event::RECYCLE::*',
  RELOADXML = 'esl::event::RELOADXML::*',
  REQUEST_PARAMS = 'esl::event::REQUEST_PARAMS::*',
  RE_SCHEDULE = 'esl::event::RE_SCHEDULE::*',
  ROSTER = 'esl::event::ROSTER::*',
  SEND_INFO = 'esl::event::SEND_INFO::*',
  SEND_MESSAGE = 'esl::event::SEND_MESSAGE::*',
  SESSION_HEARTBEAT = 'esl::event::SESSION_HEARTBEAT::*',
  SHUTDOWN = 'esl::event::SHUTDOWN::*',
  STARTUP = 'esl::event::STARTUP::*',
  SUBCLASS_ANY = 'esl::event::SUBCLASS_ANY::*',
  TALK = 'esl::event::TALK::*',
  TRAP = 'esl::event::TRAP::*',
  UNPUBLISH = 'esl::event::UNPUBLISH::*'
}