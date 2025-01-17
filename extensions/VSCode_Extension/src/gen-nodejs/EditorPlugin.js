//
// Autogenerated by Thrift Compiler (0.15.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;
var Int64 = require('node-int64');


var ttypes = require('./CodeChat_Services_types');
//HELPER FUNCTIONS AND STRUCTURES

var EditorPlugin_ping_args = function(args) {
};
EditorPlugin_ping_args.prototype = {};
EditorPlugin_ping_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

EditorPlugin_ping_args.prototype.write = function(output) {
  output.writeStructBegin('EditorPlugin_ping_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var EditorPlugin_ping_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
EditorPlugin_ping_result.prototype = {};
EditorPlugin_ping_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

EditorPlugin_ping_result.prototype.write = function(output) {
  output.writeStructBegin('EditorPlugin_ping_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var EditorPlugin_get_client_args = function(args) {
  this.codeChat_client_location = null;
  if (args) {
    if (args.codeChat_client_location !== undefined && args.codeChat_client_location !== null) {
      this.codeChat_client_location = args.codeChat_client_location;
    }
  }
};
EditorPlugin_get_client_args.prototype = {};
EditorPlugin_get_client_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.codeChat_client_location = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

EditorPlugin_get_client_args.prototype.write = function(output) {
  output.writeStructBegin('EditorPlugin_get_client_args');
  if (this.codeChat_client_location !== null && this.codeChat_client_location !== undefined) {
    output.writeFieldBegin('codeChat_client_location', Thrift.Type.I32, 1);
    output.writeI32(this.codeChat_client_location);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var EditorPlugin_get_client_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.RenderClientReturn(args.success);
    }
  }
};
EditorPlugin_get_client_result.prototype = {};
EditorPlugin_get_client_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.RenderClientReturn();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

EditorPlugin_get_client_result.prototype.write = function(output) {
  output.writeStructBegin('EditorPlugin_get_client_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var EditorPlugin_start_render_args = function(args) {
  this.text = null;
  this.path = null;
  this.id = null;
  this.is_dirty = null;
  if (args) {
    if (args.text !== undefined && args.text !== null) {
      this.text = args.text;
    }
    if (args.path !== undefined && args.path !== null) {
      this.path = args.path;
    }
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.is_dirty !== undefined && args.is_dirty !== null) {
      this.is_dirty = args.is_dirty;
    }
  }
};
EditorPlugin_start_render_args.prototype = {};
EditorPlugin_start_render_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.text = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.path = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.id = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.is_dirty = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

EditorPlugin_start_render_args.prototype.write = function(output) {
  output.writeStructBegin('EditorPlugin_start_render_args');
  if (this.text !== null && this.text !== undefined) {
    output.writeFieldBegin('text', Thrift.Type.STRING, 1);
    output.writeString(this.text);
    output.writeFieldEnd();
  }
  if (this.path !== null && this.path !== undefined) {
    output.writeFieldBegin('path', Thrift.Type.STRING, 2);
    output.writeString(this.path);
    output.writeFieldEnd();
  }
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 3);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  if (this.is_dirty !== null && this.is_dirty !== undefined) {
    output.writeFieldBegin('is_dirty', Thrift.Type.BOOL, 4);
    output.writeBool(this.is_dirty);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var EditorPlugin_start_render_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
EditorPlugin_start_render_result.prototype = {};
EditorPlugin_start_render_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

EditorPlugin_start_render_result.prototype.write = function(output) {
  output.writeStructBegin('EditorPlugin_start_render_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var EditorPlugin_stop_client_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
  }
};
EditorPlugin_stop_client_args.prototype = {};
EditorPlugin_stop_client_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.id = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

EditorPlugin_stop_client_args.prototype.write = function(output) {
  output.writeStructBegin('EditorPlugin_stop_client_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var EditorPlugin_stop_client_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
EditorPlugin_stop_client_result.prototype = {};
EditorPlugin_stop_client_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

EditorPlugin_stop_client_result.prototype.write = function(output) {
  output.writeStructBegin('EditorPlugin_stop_client_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var EditorPluginClient = exports.Client = function(output, pClass) {
  this.output = output;
  this.pClass = pClass;
  this._seqid = 0;
  this._reqs = {};
};
EditorPluginClient.prototype = {};
EditorPluginClient.prototype.seqid = function() { return this._seqid; };
EditorPluginClient.prototype.new_seqid = function() { return this._seqid += 1; };

EditorPluginClient.prototype.ping = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_ping();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_ping();
  }
};

EditorPluginClient.prototype.send_ping = function() {
  var output = new this.pClass(this.output);
  var args = new EditorPlugin_ping_args();
  try {
    output.writeMessageBegin('ping', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

EditorPluginClient.prototype.recv_ping = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new EditorPlugin_ping_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('ping failed: unknown result');
};

EditorPluginClient.prototype.get_client = function(codeChat_client_location, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_get_client(codeChat_client_location);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_get_client(codeChat_client_location);
  }
};

EditorPluginClient.prototype.send_get_client = function(codeChat_client_location) {
  var output = new this.pClass(this.output);
  var params = {
    codeChat_client_location: codeChat_client_location
  };
  var args = new EditorPlugin_get_client_args(params);
  try {
    output.writeMessageBegin('get_client', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

EditorPluginClient.prototype.recv_get_client = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new EditorPlugin_get_client_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('get_client failed: unknown result');
};

EditorPluginClient.prototype.start_render = function(text, path, id, is_dirty, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_start_render(text, path, id, is_dirty);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_start_render(text, path, id, is_dirty);
  }
};

EditorPluginClient.prototype.send_start_render = function(text, path, id, is_dirty) {
  var output = new this.pClass(this.output);
  var params = {
    text: text,
    path: path,
    id: id,
    is_dirty: is_dirty
  };
  var args = new EditorPlugin_start_render_args(params);
  try {
    output.writeMessageBegin('start_render', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

EditorPluginClient.prototype.recv_start_render = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new EditorPlugin_start_render_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('start_render failed: unknown result');
};

EditorPluginClient.prototype.stop_client = function(id, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_stop_client(id);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_stop_client(id);
  }
};

EditorPluginClient.prototype.send_stop_client = function(id) {
  var output = new this.pClass(this.output);
  var params = {
    id: id
  };
  var args = new EditorPlugin_stop_client_args(params);
  try {
    output.writeMessageBegin('stop_client', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

EditorPluginClient.prototype.recv_stop_client = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new EditorPlugin_stop_client_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('stop_client failed: unknown result');
};
var EditorPluginProcessor = exports.Processor = function(handler) {
  this._handler = handler;
};
EditorPluginProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
};
EditorPluginProcessor.prototype.process_ping = function(seqid, input, output) {
  var args = new EditorPlugin_ping_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.ping.length === 0) {
    Q.fcall(this._handler.ping.bind(this._handler)
    ).then(function(result) {
      var result_obj = new EditorPlugin_ping_result({success: result});
      output.writeMessageBegin("ping", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("ping", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.ping(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new EditorPlugin_ping_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("ping", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("ping", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
EditorPluginProcessor.prototype.process_get_client = function(seqid, input, output) {
  var args = new EditorPlugin_get_client_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.get_client.length === 1) {
    Q.fcall(this._handler.get_client.bind(this._handler),
      args.codeChat_client_location
    ).then(function(result) {
      var result_obj = new EditorPlugin_get_client_result({success: result});
      output.writeMessageBegin("get_client", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("get_client", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.get_client(args.codeChat_client_location, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new EditorPlugin_get_client_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("get_client", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("get_client", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
EditorPluginProcessor.prototype.process_start_render = function(seqid, input, output) {
  var args = new EditorPlugin_start_render_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.start_render.length === 4) {
    Q.fcall(this._handler.start_render.bind(this._handler),
      args.text,
      args.path,
      args.id,
      args.is_dirty
    ).then(function(result) {
      var result_obj = new EditorPlugin_start_render_result({success: result});
      output.writeMessageBegin("start_render", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("start_render", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.start_render(args.text, args.path, args.id, args.is_dirty, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new EditorPlugin_start_render_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("start_render", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("start_render", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
EditorPluginProcessor.prototype.process_stop_client = function(seqid, input, output) {
  var args = new EditorPlugin_stop_client_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.stop_client.length === 1) {
    Q.fcall(this._handler.stop_client.bind(this._handler),
      args.id
    ).then(function(result) {
      var result_obj = new EditorPlugin_stop_client_result({success: result});
      output.writeMessageBegin("stop_client", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("stop_client", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.stop_client(args.id, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new EditorPlugin_stop_client_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("stop_client", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("stop_client", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
