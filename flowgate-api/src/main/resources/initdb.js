/**
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
*/
db.auth('admin', 'ADMINPASSWD_CHANGE')
db = db.getSiblingDB('wormhole')
db.createUser({user:'wormhole',pwd:'USERPASSWD_CHANGE',roles:[{'role':'dbOwner','db':'wormhole'}]})
db.privilegeResourceMapping.insertMany([
{"_id":"createAnAsset","privilegeName":"createAnAsset",resource:[{"pattern":"/v1/assets","httpMethod":"POST","sortWeight":"1"}]},
{"_id":"createAssets","privilegeName":"createAssets",resource:[{"pattern":"/v1/assets/batchoperation","httpMethod":"POST","sortWeight":"2"}]},
{"_id":"readAsset","privilegeName":"readAsset",resource:[{"pattern":"/v1/assets/**","httpMethod":"GET","sortWeight":"1"}]},
{"_id":"readAssetByAssetNameAndAssetNumber","privilegeName":"readAssetByAssetNameAndAssetNumber",resource:[{"pattern":"/v1/assets/assetnumber**/assetname/**","httpMethod":"GET","sortWeight":"100"}]},
{"_id":"readAssetByAssetName","privilegeName":"readAssetByAssetName",resource:[{"pattern":"/v1/assets/name/**","httpMethod":"GET","sortWeight":"97"}]},
{"_id":"readAssetBySourceAndType","privilegeName":"readAssetBySourceAndType",resource:[{"pattern":"/v1/assets/source**/type/**","httpMethod":"GET","sortWeight":"96"}]},
{"_id":"readAssetByType","privilegeName":"readAssetByType",resource:[{"pattern":"/v1/assets/type/**","httpMethod":"GET","sortWeight":"2"}]},
{"_id":"readMappedAsset","privilegeName":"readMappedAsset",resource:[{"pattern":"/v1/assets/mappedasset/category/**","httpMethod":"GET","sortWeight":"100"}]},
{"_id":"readAssetByKeywords","privilegeName":"readAssetByKeywords",resource:[{"pattern":"/v1/assets/page/**","httpMethod":"GET","sortWeight":"100"}]},
{"_id":"readAssetByPduIsNull","privilegeName":"readAssetByPduIsNull",resource:[{"pattern":"/v1/assets/pdusisnull","httpMethod":"GET","sortWeight":"1"}]},
{"_id":"updateAsset","privilegeName":"updateAsset",resource:[{"pattern":"/v1/assets","httpMethod":"PUT","sortWeight":"1"}]},
{"_id":"deleteAsset","privilegeName":"deleteAsset",resource:[{"pattern":"/v1/assets/**","httpMethod":"DELETE","sortWeight":"2"}]},
{"_id":"createRealTimeSensorDatas","privilegeName":"createRealTimeSensorDatas",resource:[{"pattern":"/v1/assets/sensordata/batchoperation","httpMethod":"POST","sortWeight":"10"}]},
{"_id":"createRealTimeSensorData","privilegeName":"createRealTimeSensorData",resource:[{"pattern":"/v1/assets/**/sensordata","httpMethod":"POST","sortWeight":"10"}]},
{"_id":"readPDUMetricsDataByAssetID","privilegeName":"readPDUMetricsDataByAssetID",resource:[{"pattern":"/v1/assets/pdu/**/realtimedata","httpMethod":"GET","sortWeight":"10"}]},
{"_id":"readServerMetricsDataByAssetID","privilegeName":"readServerMetricsDataByAssetID",resource:[{"pattern":"/v1/assets/server/**/realtimedata","httpMethod":"GET","sortWeight":"10"}]},
{"_id":"readMappingsByVROID","privilegeName":"readMappingsByVROID",resource:[{"pattern":"/v1/assets/mapping/vrops/**","httpMethod":"GET","sortWeight":"10"}]},
{"_id":"createServerMapping","privilegeName":"createServerMapping",resource:[{"pattern":"/v1/assets/mapping","httpMethod":"POST","sortWeight":"10"}]},
{"_id":"readAssetsByVROID","privilegeName":"readAssetsByVROID",resource:[{"pattern":"/v1/assets/vrops/**","httpMethod":"GET","sortWeight":"1"}]},
{"_id":"updateServerMapping","privilegeName":"updateServerMapping",resource:[{"pattern":"/v1/assets/mapping","httpMethod":"PUT","sortWeight":"10"}]},
{"_id":"deleteServerMapping","privilegeName":"deleteServerMapping",resource:[{"pattern":"/v1/assets/mapping/**","httpMethod":"DELETE","sortWeight":"11"}]},
{"_id":"mergeServerMapping","privilegeName":"mergeServerMapping",resource:[{"pattern":"/v1/assets/mapping/merge/**","httpMethod":"PUT","sortWeight":"10"}]},
{"_id":"readUnMappedServers","privilegeName":"readUnMappedServers",resource:[{"pattern":"/v1/assets/mapping/unmappedservers","httpMethod":"GET","sortWeight":"30"}]},
{"_id":"readMappingsByVROIDAndPage","privilegeName":"readMappingsByVROIDAndPage",resource:[{"pattern":"/v1/assets/mapping/vrops/**/page/**/pagesize/**","httpMethod":"GET","sortWeight":"100"}]},
{"_id":"readMappingsByVCIDAndPage","privilegeName":"readMappingsByVCIDAndPage",resource:[{"pattern":"/v1/assets/mapping/vc/**/page/**/pagesize/**","httpMethod":"GET","sortWeight":"100"}]},
{"_id":"readMappingsByVCID","privilegeName":"readMappingsByVCID",resource:[{"pattern":"/v1/assets/mapping/vc/**","httpMethod":"GET","sortWeight":"10"}]},
{"_id":"createHostNameAndIPMapping","privilegeName":"createHostNameAndIPMapping",resource:[{"pattern":"/v1/assets/mapping/hostnameip","httpMethod":"POST","sortWeight":"10"}]},
{"_id":"readHostNameAndIPMapping","privilegeName":"readHostNameAndIPMapping",resource:[{"pattern":"/v1/assets/mapping/hostnameip/ip/**","httpMethod":"GET","sortWeight":"30"}]},
{"_id":"readAssetsByVCID","privilegeName":"readAssetsByVCID",resource:[{"pattern":"/v1/assets/vc/**","httpMethod":"GET","sortWeight":"10"}]},
{"_id":"createFacilitySoftwareConfig","privilegeName":"createFacilitySoftwareConfig",resource:[{"pattern":"/v1/facilitysoftware","httpMethod":"POST","sortWeight":"5"}]},
{"_id":"readFacilityByID","privilegeName":"readFacilityByID",resource:[{"pattern":"/v1/facilitysoftware/**","httpMethod":"GET","sortWeight":"5"}]},
{"_id":"readFacilityByType","privilegeName":"readFacilityByType",resource:[{"pattern":"/v1/facilitysoftware/type/**","httpMethod":"GET","sortWeight":"5"}]},
{"_id":"readFacilityByPage","privilegeName":"readFacilityByPage",resource:[{"pattern":"/v1/facilitysoftware/page/**","httpMethod":"GET","sortWeight":"15"}]},
{"_id":"facilityServerSyncDataByServerId","privilegeName":"facilityServerSyncDataByServerId",resource:[{"pattern":"/v1/facilitysoftware/syncdatabyserverid/**","httpMethod":"POST","sortWeight":"8"}]},
{"_id":"deleteFacilitySoftwareConfig","privilegeName":"deleteFacilitySoftwareConfig",resource:[{"pattern":"/v1/facilitysoftware/**","httpMethod":"DELETE","sortWeight":"3"}]},
{"_id":"updateFacilitySoftwareConfig","privilegeName":"updateFacilitySoftwareConfig",resource:[{"pattern":"/v1/facilitysoftware","httpMethod":"PUT","sortWeight":"3"}]},
{"_id":"updateFacilitySoftwareConfigStatus","privilegeName":"updateFacilitySoftwareConfigStatus",resource:[{"pattern":"/v1/facilitysoftware/status","httpMethod":"PUT","sortWeight":"4"}]},
{"_id":"startFullMappingAggregation","privilegeName":"startFullMappingAggregation",resource:[{"pattern":"/v1/jobs/mergeservermapping","httpMethod":"POST","sortWeight":"6"}]},
{"_id":"generateServerPDUMapping","privilegeName":"generateServerPDUMapping",resource:[{"pattern":"/v1/jobs/pduservermapping","httpMethod":"POST","sortWeight":"6"}]},
{"_id":"syncHostnameByIp","privilegeName":"syncHostnameByIp",resource:[{"pattern":"/v1/jobs/synchostnamebyip/**","httpMethod":"POST","sortWeight":"6"}]},
{"_id":"readVROJobs","privilegeName":"readVROJobs",resource:[{"pattern":"/v1/jobs/vrojobs","httpMethod":"GET","sortWeight":"6"}]},
{"_id":"readVCJobs","privilegeName":"readVCJobs",resource:[{"pattern":"/v1/jobs/vcjobs","httpMethod":"GET","sortWeight":"6"}]},
{"_id":"readJobByType","privilegeName":"readJobByType",resource:[{"pattern":"/v1/jobs/type/**","httpMethod":"GET","sortWeight":"6"}]},
{"_id":"tempHumidityMapping","privilegeName":"tempHumidityMapping",resource:[{"pattern":"/v1/jobs/temphumiditymapping/fullsync/**","httpMethod":"POST","sortWeight":"1"}]},
{"_id":"createSddcSoftwareConfig","privilegeName":"createSddcSoftwareConfig",resource:[{"pattern":"/v1/sddc","httpMethod":"POST","sortWeight":"8"}]},
{"_id":"deleteSddcSoftwareConfig","privilegeName":"deleteSddcSoftwareConfig",resource:[{"pattern":"/v1/sddc/**","httpMethod":"DELETE","sortWeight":"8"}]},
{"_id":"updateSddcSoftwareConfig","privilegeName":"updateSddcSoftwareConfig",resource:[{"pattern":"/v1/sddc","httpMethod":"PUT","sortWeight":"8"}]},
{"_id":"updateSddcSoftwareConfigStatus","privilegeName":"updateSddcSoftwareConfigStatus",resource:[{"pattern":"/v1/sddc/status","httpMethod":"PUT","sortWeight":"9"}]},
{"_id":"readSddcSoftwareConfigByID","privilegeName":"readSddcSoftwareConfigByID",resource:[{"pattern":"/v1/sddc/**","httpMethod":"GET","sortWeight":"8"}]},
{"_id":"syncDataByServerId","privilegeName":"syncDataByServerId",resource:[{"pattern":"/v1/sddc/syncdatabyserverid/**","httpMethod":"POST","sortWeight":"8"}]},
{"_id":"readVROByUser","privilegeName":"readVROByUser",resource:[{"pattern":"/v1/sddc/user/vrops","httpMethod":"GET","sortWeight":"8"}]},
{"_id":"readSddcSoftwareConfigByVC","privilegeName":"readSddcSoftwareConfigByVC",resource:[{"pattern":"/v1/sddc/vc","httpMethod":"GET","sortWeight":"8"}]},
{"_id":"readSddcSoftwareConfigByUserAndPage","privilegeName":"readSddcSoftwareConfigByUserAndPage",resource:[{"pattern":"/v1/sddc/page/**","httpMethod":"GET","sortWeight":"12"}]},
{"_id":"readVROsSddcSoftwareConfigByUser","privilegeName":"readVROsSddcSoftwareConfigByUser",resource:[{"pattern":"/v1/sddc/vrops","httpMethod":"GET","sortWeight":"8"}]},
{"_id":"readSddcSoftwareConfigByTypeAndUser","privilegeName":"readSddcSoftwareConfigByTypeAndUser",resource:[{"pattern":"/v1/sddc/type/**","httpMethod":"GET","sortWeight":"10"}]},
{"_id":"createSensorSetting","privilegeName":"createSensorSetting",resource:[{"pattern":"/v1/sensors/setting","httpMethod":"POST","sortWeight":"1"}]},
{"_id":"readSensorSettingByID","privilegeName":"readSensorSettingByID",resource:[{"pattern":"/v1/sensors/setting/**","httpMethod":"GET","sortWeight":"6"}]},
{"_id":"readSensorSettings","privilegeName":"readSensorSettings",resource:[{"pattern":"/v1/sensors/setting","httpMethod":"GET","sortWeight":"8"}]},
{"_id":"readSensorSettingsByPage","privilegeName":"readSensorSettingsByPage",resource:[{"pattern":"/v1/sensors/setting/page/**/pagesize/**","httpMethod":"GET","sortWeight":"10"}]},
{"_id":"updateSensorSetting","privilegeName":"updateSensorSetting",resource:[{"pattern":"/v1/sensors/setting","httpMethod":"PUT","sortWeight":"2"}]},
{"_id":"deleteSensorSetting","privilegeName":"deleteSensorSetting",resource:[{"pattern":"/v1/sensors/setting/**","httpMethod":"DELETE","sortWeight":"2"}]},
{"_id":"deleteUser","privilegeName":"deleteUser",resource:[{"pattern":"/v1/auth/user/**","httpMethod":"DELETE","sortWeight":"1"}]},
{"_id":"updateUser","privilegeName":"updateUser",resource:[{"pattern":"/v1/auth/user","httpMethod":"PUT","sortWeight":"3"}]},
{"_id":"readUserByID","privilegeName":"readUserByID",resource:[{"pattern":"/v1/auth/user/**","httpMethod":"GET","sortWeight":"1"}]},
{"_id":"readUserByUserName","privilegeName":"readUserByUserName",resource:[{"pattern":"/v1/auth/user/username/**","httpMethod":"GET","sortWeight":"10"}]},
{"_id":"readUserByPage","privilegeName":"readUserByPage",resource:[{"pattern":"/v1/auth/user","httpMethod":"GET","sortWeight":"10"}]},
{"_id":"createRole","privilegeName":"createRole",resource:[{"pattern":"/v1/auth/role","httpMethod":"POST","sortWeight":"1"}]},
{"_id":"readRole","privilegeName":"readRole",resource:[{"pattern":"/v1/auth/role/**","httpMethod":"GET","sortWeight":"1"}]},
{"_id":"readRolesByPage","privilegeName":"readRolesByPage",resource:[{"pattern":"/v1/auth/role","httpMethod":"GET","sortWeight":"10"}]},
{"_id":"deleteRole","privilegeName":"deleteRole",resource:[{"pattern":"/v1/auth/role/**","httpMethod":"DELETE","sortWeight":"1"}]},
{"_id":"updateRole","privilegeName":"updateRole",resource:[{"pattern":"/v1/auth/role","httpMethod":"PUT","sortWeight":"1"}]},
{"_id":"readPrivileges","privilegeName":"readPrivileges",resource:[{"pattern":"/v1/auth/privileges","httpMethod":"GET","sortWeight":"1"}]},
{"_id":"readSystemSummary","privilegeName":"readSystemSummary",resource:[{"pattern":"/v1/summary/systemsummary","httpMethod":"GET","sortWeight":"1"}]},
{"_id":"Default_Access_Privilege","privilegeName":"Default_Access_Privilege",resource:[{"pattern":"/v1/auth/logout","httpMethod":"GET","sortWeight":"1"},{"pattern":"/v1/auth/user","httpMethod":"POST","sortWeight":"1"},{"pattern":"/v1/auth/token","httpMethod":"POST","sortWeight":"1"},{"pattern":"/v1/auth/token/refresh","httpMethod":"GET","sortWeight":"1"}]}]);
db.wormholeRole.insert({"roleName":"admin","privilegeNames":["readPDUMetricsDataByAssetID","readServerMetricsDataByAssetID","readAssetByAssetNameAndAssetNumber","deleteServerMapping","readSensorSettings","updateFacilitySoftwareConfigStatus","updateSddcSoftwareConfigStatus","readSystemSummary","tempHumidityMapping","readUserByUserName","facilityServerSyncDataByServerId","syncDataByServerId","readVROByUser","readUnMappedServers","readAssetsByVCID","readPrivileges","createAnAsset","createAssets","readAsset","readAssetByAssetName","readAssetBySourceAndType","readAssetByType","readMappedAsset","readAssetByKeywords","readAssetByPduIsNull","updateAsset","deleteAsset","createRealTimeSensorDatas","createRealTimeSensorData","readMappingsByVROID","createServerMapping","readAssetsByVROID","updateServerMapping","mergeServerMapping","readMappingsByVROIDAndPage","readMappingsByVCIDAndPage","readMappingsByVCID","createHostNameAndIPMapping","createFacilitySoftwareConfig","readFacilityByID","readFacilityByType","readFacilityByPage","deleteFacilitySoftwareConfig","updateFacilitySoftwareConfig","startFullMappingAggregation","generateServerPDUMapping","syncHostnameByIp","readVROJobs","readVCJobs","readJobByType","createSddcSoftwareConfig","deleteSddcSoftwareConfig","updateSddcSoftwareConfig","readSddcSoftwareConfigByID","readSddcSoftwareConfigByVC","readSddcSoftwareConfigByUserAndPage","readVROsSddcSoftwareConfigByUser","readSddcSoftwareConfigByTypeAndUser","createSensorSetting","readSensorSettings","readSensorSettingByID","readSensorSettingsByPage","updateSensorSetting","deleteSensorSetting","readHostNameAndIPMapping","deleteUser","updateUser","readUserByID","readUserByPage","readUsers","createRole","readRole","readRolesByPage","deleteRole","updateRole","Default_Access_Privilege"]});
db.wormholeRole.insert({"roleName":"api","privilegeNames":["syncHostnameByIp","readPDUMetricsDataByAssetID","readServerMetricsDataByAssetID","readAssetByAssetNameAndAssetNumber","deleteServerMapping","updateSddcSoftwareConfigStatus","readVROByUser","readAssetsByVCID","readAsset","readAssetByAssetName","readAssetBySourceAndType","readAssetByType","readMappedAsset","readAssetByKeywords","readAssetByPduIsNull","readMappingsByVROID","createServerMapping","readAssetsByVROID","updateServerMapping","mergeServerMapping","readMappingsByVROIDAndPage","readMappingsByVCIDAndPage","readMappingsByVCID","createSddcSoftwareConfig","deleteSddcSoftwareConfig","updateSddcSoftwareConfig","readSddcSoftwareConfigByID","readSddcSoftwareConfigByVC","readSddcSoftwareConfigByUserAndPage","readVROsSddcSoftwareConfigByUser","readSddcSoftwareConfigByTypeAndUser","readHostNameAndIPMapping","Default_Access_Privilege"]});
db.wormholeRole.insert({"roleName":"user","privilegeNames":["deleteServerMapping","updateSddcSoftwareConfigStatus","updateUser","syncDataByServerId","readUserByUserName","readVROByUser","readAssetsByVCID","readAsset","readAssetByAssetName","readAssetBySourceAndType","readAssetByType","readMappedAsset","readAssetByKeywords","readAssetByPduIsNull","readMappingsByVROID","createServerMapping","readAssetsByVROID","updateServerMapping","mergeServerMapping","readMappingsByVROIDAndPage","readMappingsByVCIDAndPage","readMappingsByVCID","createSddcSoftwareConfig","deleteSddcSoftwareConfig","updateSddcSoftwareConfig","readSddcSoftwareConfigByID","readSddcSoftwareConfigByVC","readSddcSoftwareConfigByUserAndPage","readVROsSddcSoftwareConfigByUser","readSddcSoftwareConfigByTypeAndUser","readPrivileges","Default_Access_Privilege"]});
db.wormholeUser.insert({ "_class" : "com.vmware.flowgate.common.model.WormholeUser", "userName" : "admin", "password" : "$2a$10$FZKc/4rF0.QWyxNiFyFyzO9CQPQ0NiggFS2BqmQw2M.biqOVH5/wu", "createTime" : new Date(), "roleNames" : [ "admin" ]});
