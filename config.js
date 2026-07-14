// AI Task Portal — configuration defaults.
// Edit this file to change what the app loads on startup: table names,
// fields per table, field labels, number formats, tab colors, and
// complexity labels. Loaded via <script src="config.js"> before the main
// script in index.html, so it must stay plain JS (no import/export).

// Cycled across table tabs and category tabs so each one is visually distinct.
const TAB_COLORS = ['#f5c359', '#5fd68a', '#6d8bff', '#ff6d6d', '#c77dff', '#4fd1c5', '#f5789a', '#9cd67d', '#7dc4f5', '#f5a45f'];

// Shown in the avatar dropdown (name, email) and used to derive the
// avatar's initials. No login system exists yet, so this is just a static
// display value — edit it here if the portal is used by someone else.
const CURRENT_USER_NAME = 'Raj Kolli';
const CURRENT_USER_EMAIL = 'rkolli@huntoil.com';

// Table names must be lowercase letters, digits, and underscores only
// (enforced by TABLE_NAME_PATTERN in index.html).
const DEFAULT_TABLE_NAMES = ['problem', 'rm_story', 'incident', 'change_request', 'sc_task'];
const DEFAULT_COMPLEXITY_LABELS = ['Easy', 'Intermediate', 'Complex', 'Blocked', 'CoreX'];
// Starting value for a table's Query textarea when it has no entry in
// DEFAULT_QUERY_VALUES below (e.g. a table added beyond the default 5).
const DEFAULT_QUERY_VALUE = 'active=true';
// Starting value for each default table's Query textarea on the Queries
// tab, position-matched to DEFAULT_TABLE_NAMES above. Scoped to a fixed
// list of assignment_group sys_ids and, for incident, excluding state 6
// (Resolved).
const DEFAULT_ASSIGNMENT_GROUP_SYS_IDS = [
  'fd0c521f3b432a98ea90087aa5e45a06', '9cdeba183363ead46f671fa19e5c7ba7', '84181fe23b27c250ea90087aa5e45af0',
  '93585b263b27c250ea90087aa5e45af8', 'f9aa6d5deb4e96504475f27bbad0cd6f', '211b05b03340d6906f671fa19e5c7b39',
  '8eb773793b722258ea90087aa5e45a57', 'f6b0ce534709be906512bf66706d43b7', '76a8066197f9d150c79bfbe3a253afb1',
  '19b26d843bf81210ea90087aa5e45a7c', 'ff4d41379719d190c79bfbe3a253aff4', 'f31f7a1c33a3ead46f671fa19e5c7bfa',
  '5ee74940b70022108d4406dd1e11a918', '8a2339b79799d190c79bfbe3a253afe3', '816f76dc33a3ead46f671fa19e5c7bd2'
];
const DEFAULT_ASSIGNMENT_GROUP_QUERY = 'assignment_group.sys_idIN' + DEFAULT_ASSIGNMENT_GROUP_SYS_IDS.join(',');
const DEFAULT_QUERY_VALUES = [
  'active=true^' + DEFAULT_ASSIGNMENT_GROUP_QUERY,
  'active=true^' + DEFAULT_ASSIGNMENT_GROUP_QUERY,
  'active=true^' + DEFAULT_ASSIGNMENT_GROUP_QUERY + '^state!=6',
  'active=true^' + DEFAULT_ASSIGNMENT_GROUP_QUERY,
  'active=true^' + DEFAULT_ASSIGNMENT_GROUP_QUERY
];

// Starting value for the "ServiceNow API URL / REST endpoint" field on the
// Configuration modal's Page Settings tab — edit it there to override
// without touching this file. Also used as the fallback endpoint: if the
// Configuration modal's current value fails, Load Live Data retries once
// against this one. {sysparm_tables}/{sysparm_querys}/{sysparm_fields} are
// literal path-parameter placeholders your Scripted REST API resource
// defines — Load Live Data substitutes them, it doesn't append a ?query
// string.
const SERVICENOW_API_URL = 'https://huntoil.service-now.com/api/ho/task_triaging/{sysparm_tables}/{sysparm_querys}/{sysparm_fields}';

// Real field lists pulled from the ServiceNow table XML exports, with
// system fields (sys_*) excluded and "number" pulled out separately since
// it's mapped to the fixed Record Number column instead of being a normal
// toggleable field. Position-matched to DEFAULT_TABLE_NAMES above.
const DEFAULT_FIELD_SETS = [
  // problem (95 fields)
  ['active', 'activity_due', 'additional_assignee_list', 'ai_resolution_plan', 'approval', 'approval_history', 'approval_set', 'assigned_to', 'assignment_group', 'business_duration',
   'business_service', 'calendar_duration', 'category', 'cause_notes', 'close_notes', 'closed_at', 'closed_by', 'cmdb_ci', 'comments', 'comments_and_work_notes',
   'company', 'confirmed_at', 'confirmed_by', 'contact_type', 'contract', 'correlation_display', 'correlation_id', 'delivery_plan', 'delivery_task', 'description',
   'due_date', 'duplicate_of', 'escalation', 'expected_start', 'first_reported_by_task', 'fix_at', 'fix_by', 'fix_communicated_at', 'fix_communicated_by', 'fix_notes',
   'follow_up', 'group_list', 'impact', 'knowledge', 'known_error', 'location', 'made_sla', 'major_problem', 'opened_at', 'opened_by',
   'order', 'parent', 'prb_model', 'priority', 'problem_state', 'reassignment_count', 'rejection_goto', 'related_incidents', 'reopen_count', 'reopened_at',
   'reopened_by', 'resolution_code', 'resolved_at', 'resolved_by', 'review_outcome', 'rfc', 'route_reason', 'service_offering', 'short_description', 'skills',
   'sla_due', 'sn_ai_sentiment', 'state', 'subcategory', 'task_effective_number', 'time_worked', 'u_business_impact', 'u_time_worked', 'u_timeline', 'universal_request',
   'upon_approval', 'upon_reject', 'urgency', 'user_input', 'variables', 'watch_list', 'wf_activity', 'work_end', 'work_notes', 'work_notes_list',
   'work_start', 'workaround', 'workaround_applied', 'workaround_communicated_at', 'workaround_communicated_by'],
  // rm_story (135 fields)
  ['acceptance_criteria', 'active', 'activity_due', 'additional_assignee_list', 'ai_resolution_plan', 'allow_dates_outside_schedule', 'approval', 'approval_history', 'approval_set', 'assigned_to',
   'assignment_group', 'backlog_type', 'blocked', 'blocked_reason', 'business_duration', 'business_service', 'calculation_type', 'calendar_duration', 'classification', 'close_notes',
   'closed_at', 'closed_by', 'cmdb_ci', 'comments', 'comments_and_work_notes', 'company', 'constraint_date', 'contact_type', 'contract', 'correlation_display',
   'correlation_id', 'critical_path', 'defect', 'delivery_plan', 'delivery_task', 'dependency', 'description', 'due_date', 'duration', 'effort',
   'end', 'end_date', 'end_date_derived_from', 'enhancement', 'epic', 'escalation', 'expected_start', 'follow_up', 'global_rank', 'group_list',
   'group_rank', 'has_conflict', 'html_description', 'impact', 'is_enabler', 'key_milestone', 'knowledge', 'level', 'location', 'made_sla',
   'milestone', 'model_id', 'mpp_task_id', 'opened_at', 'opened_by', 'order', 'orig_sys_id', 'orig_top_task_id', 'override_status', 'parent',
   'parent_feature', 'percent_complete', 'prereq', 'primary_goal', 'priority', 'product', 'product_rank', 'product_rel_index', 'rank', 'reassignment_count',
   'rejection_goto', 'relation_applied', 'release', 'release_index', 'remaining_duration', 'remaining_effort', 'rollup', 'route_reason', 'run_calc_brs', 'schedule_end_date',
   'schedule_start_date', 'service_offering', 'shadow', 'short_description', 'skills', 'sla_due', 'sn_ai_sentiment', 'software_model', 'split_from', 'sprint',
   'sprint_index', 'start', 'start_date', 'start_date_derived_from', 'state', 'status', 'story_points', 'sub_tree_root', 'task', 'task_effective_number',
   'theme', 'time_constraint', 'time_worked', 'time_zone', 'top_task', 'type', 'u_related_task', 'u_time_worked', 'universal_request', 'upon_approval',
   'upon_reject', 'urgency', 'user_input', 'variables', 'version', 'watch_list', 'wbs', 'wbs_order', 'wf_activity', 'work_duration',
   'work_effort', 'work_end', 'work_notes', 'work_notes_list', 'work_start'],
  // incident (115 fields)
  ['actions_taken', 'active', 'activity_due', 'additional_assignee_list', 'ai_resolution_plan', 'approval', 'approval_history', 'approval_set', 'assigned_to', 'assignment_group',
   'business_duration', 'business_impact', 'business_service', 'business_stc', 'calendar_duration', 'calendar_stc', 'caller_id', 'category', 'cause', 'caused_by',
   'child_incidents', 'close_code', 'close_notes', 'closed_at', 'closed_by', 'cmdb_ci', 'comments', 'comments_and_work_notes', 'company', 'contact_type',
   'contract', 'correlation_display', 'correlation_id', 'delivery_plan', 'delivery_task', 'description', 'due_date', 'escalation', 'expected_start', 'follow_up',
   'group_list', 'hold_reason', 'impact', 'incident_state', 'knowledge', 'lessons_learned', 'location', 'made_sla', 'major_incident_state', 'notify',
   'opened_at', 'opened_by', 'order', 'origin_id', 'origin_table', 'overview', 'parent', 'parent_incident', 'priority', 'problem_id',
   'promoted_by', 'promoted_on', 'proposed_by', 'proposed_on', 'reassignment_count', 'rejection_goto', 'reopen_count', 'reopened_by', 'reopened_time', 'resolved_at',
   'resolved_by', 'rfc', 'route_reason', 'service_offering', 'severity', 'short_description', 'skills', 'sla_due', 'sn_ai_sentiment', 'state',
   'subcategory', 'task_effective_number', 'time_worked', 'timeline', 'trigger_rule', 'u_announce_on_ivr', 'u_call_bridge', 'u_ci_not_found', 'u_escalated', 'u_incident_manager',
   'u_on_behalf_of', 'u_on_hold_count', 'u_on_hold_since', 'u_on_hold_time', 'u_other_configuration_item', 'u_outage_time', 'u_preferred_contact_phone_number', 'u_reactivation_date', 'u_request', 'u_sla_review',
   'u_time_worked', 'u_unassigned_since', 'u_unassigned_time', 'universal_request', 'upon_approval', 'upon_reject', 'urgency', 'user_input', 'variables', 'watch_list',
   'wf_activity', 'work_end', 'work_notes', 'work_notes_list', 'work_start'],
  // change_request (113 fields)
  ['active', 'activity_due', 'additional_assignee_list', 'ai_resolution_plan', 'approval', 'approval_history', 'approval_set', 'assigned_to', 'assignment_group', 'backout_plan',
   'business_duration', 'business_service', 'cab_date', 'cab_date_time', 'cab_delegate', 'cab_recommendation', 'cab_required', 'calendar_duration', 'category', 'change_plan',
   'chg_model', 'chg_model_template', 'close_code', 'close_notes', 'closed_at', 'closed_by', 'cmdb_ci', 'comments', 'comments_and_work_notes', 'company',
   'conflict_last_run', 'conflict_status', 'contact_type', 'contract', 'copied_from', 'correlation_display', 'correlation_id', 'delivery_plan', 'delivery_task', 'description',
   'due_date', 'end_date', 'escalation', 'exclude_from_conflict_detection', 'expected_start', 'follow_up', 'group_list', 'impact', 'implementation_plan', 'justification',
   'knowledge', 'location', 'made_sla', 'on_hold', 'on_hold_reason', 'on_hold_task', 'opened_at', 'opened_by', 'order', 'outside_maintenance_schedule',
   'parent', 'phase', 'phase_state', 'priority', 'production_system', 'reason', 'reassignment_count', 'rejection_goto', 'requested_by', 'requested_by_date',
   'review_comments', 'review_date', 'review_status', 'risk', 'risk_impact_analysis', 'risk_value', 'route_reason', 'scope', 'service_offering', 'short_description',
   'skills', 'sla_due', 'sn_ai_sentiment', 'start_date', 'state', 'std_change_producer_version', 'task_effective_number', 'test_plan', 'time_worked', 'type',
   'u_ci_not_found', 'u_cmdb_ci_text', 'u_emergency_change', 'u_impact_analysis', 'u_impacted_locations', 'u_it_communication_required', 'u_post_change_validation_result', 'u_preferred_contact_information', 'u_requested_for', 'u_time_worked',
   'unauthorized', 'universal_request', 'upon_approval', 'upon_reject', 'urgency', 'user_input', 'variables', 'watch_list', 'wf_activity', 'work_end',
   'work_notes', 'work_notes_list', 'work_start'],
  // sc_task (77 fields)
  ['active', 'activity_due', 'additional_assignee_list', 'ai_resolution_plan', 'approval', 'approval_history', 'approval_set', 'assigned_to', 'assignment_group', 'business_duration',
   'business_service', 'calendar_duration', 'calendar_stc', 'cat_item', 'close_notes', 'closed_at', 'closed_by', 'cmdb_ci', 'comments', 'comments_and_work_notes',
   'company', 'contact_type', 'contract', 'correlation_display', 'correlation_id', 'delivery_plan', 'delivery_task', 'description', 'due_date', 'escalation',
   'expected_start', 'follow_up', 'group_list', 'impact', 'knowledge', 'location', 'made_sla', 'opened_at', 'opened_by', 'order',
   'parent', 'priority', 'reassignment_count', 'rejection_goto', 'request', 'request_item', 'route_reason', 'sc_catalog', 'service_offering', 'short_description',
   'skills', 'sla_due', 'sn_ai_sentiment', 'state', 'task_effective_number', 'time_worked', 'u_escalated', 'u_pending_reason', 'u_reactivation_date', 'u_related_story',
   'u_sla_duration', 'u_sla_review', 'u_time_worked', 'u_unassigned_since', 'u_unassigned_time', 'universal_request', 'upon_approval', 'upon_reject', 'urgency', 'user_input',
   'variables', 'watch_list', 'wf_activity', 'work_end', 'work_notes', 'work_notes_list', 'work_start']
];

// The fields (and order) selected by default for each table, before a user
// customizes the slush bucket. Position-matched to DEFAULT_TABLE_NAMES above.
// Any field not listed here still exists and shows up in "Available".
const DEFAULT_ACTIVE_FIELDS = [
  // problem
  ['short_description', 'description', 'priority', 'state', 'assigned_to', 'assignment_group'],
  // rm_story
  ['short_description', 'description', 'acceptance_criteria', 'assigned_to', 'assignment_group', 'priority', 'state', 'status', 'u_related_task'],
  // incident
  ['priority', 'short_description', 'description', 'u_on_behalf_of', 'state', 'caller_id', 'assigned_to', 'assignment_group'],
  // change_request
  ['assigned_to', 'assignment_group', 'short_description', 'start_date', 'end_date', 'state'],
  // sc_task
  ['short_description', 'description', 'cat_item', 'assigned_to', 'assignment_group']
];

// The "number" field's real-world prefix + example numeric value per
// default table, used to generate realistic Record Number mock values
// (e.g. INC0126742) instead of a plain row count.
const DEFAULT_NUMBER_PREFIXES = ['PRB', 'STRY', 'INC', 'CHG', 'SCTASK'];
const DEFAULT_NUMBER_BASES = [40085, 11961, 126742, 33323, 74637];

// Real ServiceNow display labels (column_label), pulled from each table's
// sys_dictionary export. TASK_FIELD_LABELS covers fields shared via the
// base "task" table; each table-specific map is layered on top and wins
// on conflict (e.g. "close_code" means "Resolution code" on incident but
// "Close code" on change_request).
const TASK_FIELD_LABELS = {
  active: 'Active', activity_due: 'Activity due', additional_assignee_list: 'Additional assignee list',
  ai_resolution_plan: 'AI Resolution Plan', approval: 'Approval', approval_history: 'Approval history',
  approval_set: 'Approval set', assigned_to: 'Assigned to', assignment_group: 'Assignment group',
  business_duration: 'Business duration', business_service: 'Service', calendar_duration: 'Duration',
  close_notes: 'Close notes', closed_at: 'Closed', closed_by: 'Closed by', cmdb_ci: 'Configuration item',
  comments: 'Additional comments', comments_and_work_notes: 'Comments and Work notes', company: 'Company',
  contact_type: 'Contact type', contract: 'Contract', correlation_display: 'Correlation display',
  correlation_id: 'Correlation ID', delivery_plan: 'Delivery plan', delivery_task: 'Delivery task',
  description: 'Description', due_date: 'Due date', escalation: 'Escalation', expected_start: 'Expected start',
  follow_up: 'Follow up', group_list: 'Group list', impact: 'Impact', knowledge: 'Knowledge',
  location: 'Location', made_sla: 'Made SLA', opened_at: 'Opened', opened_by: 'Opened by', order: 'Order',
  parent: 'Parent', priority: 'Priority', reassignment_count: 'Reassignment count', rejection_goto: 'Rejection goto',
  route_reason: 'Transfer reason', service_offering: 'Service offering', short_description: 'Short description',
  skills: 'Skills', sla_due: 'SLA due', sn_ai_sentiment: 'Sentiment', state: 'State',
  task_effective_number: 'Effective number', time_worked: 'Time worked', u_time_worked: 'Time worked',
  universal_request: 'Universal Request', upon_approval: 'Upon approval', upon_reject: 'Upon reject',
  urgency: 'Urgency', user_input: 'User input', variables: 'Variables', watch_list: 'Watch list',
  wf_activity: 'Workflow activity', work_end: 'Actual end', work_notes: 'Work notes',
  work_notes_list: 'Work notes list', work_start: 'Actual start'
};
const PROBLEM_FIELD_LABELS = {
  category: 'Category', cause_notes: 'Identified Root Cause', confirmed_at: 'Confirmed', confirmed_by: 'Confirmed by',
  duplicate_of: 'Duplicate of', first_reported_by_task: 'First reported by', fix_at: 'Fix', fix_by: 'Fix by',
  fix_communicated_at: 'Fix communicated', fix_communicated_by: 'Fix communicated by', fix_notes: 'Fix notes',
  known_error: 'Known error', major_problem: 'Major problem', prb_model: 'Model', problem_state: 'Problem state',
  related_incidents: 'Related Incidents', reopen_count: 'Reopen count', reopened_at: 'Last reopened at',
  reopened_by: 'Last reopened by', resolution_code: 'Resolution code', resolved_at: 'Resolved',
  resolved_by: 'Resolved by', review_outcome: 'Major problem review notes', rfc: 'Change request',
  subcategory: 'Subcategory', u_business_impact: 'Business Impact', u_timeline: 'Timeline',
  workaround: 'Technical Details', workaround_applied: 'Workaround applied',
  workaround_communicated_at: 'Workaround communicated', workaround_communicated_by: 'Workaround communicated by'
};
const RM_STORY_FIELD_LABELS = {
  acceptance_criteria: 'Acceptance criteria', backlog_type: 'Backlog Type', blocked: 'Blocked',
  blocked_reason: 'Blocked reason', classification: 'Classification', defect: 'Defect', enhancement: 'Enhancement',
  epic: 'Epic', global_rank: 'Global rank', group_rank: 'Group rank', is_enabler: 'Enabler',
  prereq: 'Prerequisites', product: 'Product', product_rank: 'Product rank', product_rel_index: 'Product Index',
  rank: 'Rank', release: 'Release', release_index: 'Release Index', split_from: 'Split from',
  sprint: 'Sprint', sprint_index: 'Sprint Index', story_points: 'Points', theme: 'Theme', type: 'Type',
  u_related_task: 'Related Task'
};
const INCIDENT_FIELD_LABELS = {
  actions_taken: 'Actions taken', business_impact: 'Business impact', business_stc: 'Business resolve time',
  calendar_stc: 'Resolve time', caller_id: 'Caller', category: 'Category', cause: 'Probable cause',
  caused_by: 'Caused by Change', child_incidents: 'Child Incidents', close_code: 'Resolution code',
  hold_reason: 'On hold reason', incident_state: 'Incident state', lessons_learned: 'Findings',
  major_incident_state: 'Major incident state', notify: 'Notify', origin_id: 'Origin', origin_table: 'Origin table',
  overview: 'Overview', parent_incident: 'Parent Incident', problem_id: 'Problem', promoted_by: 'Promoted by',
  promoted_on: 'Promoted', proposed_by: 'Proposed by', proposed_on: 'Proposed', reopened_by: 'Last reopened by',
  reopened_time: 'Last reopened at', resolved_at: 'Resolved', resolved_by: 'Resolved by', rfc: 'Change Request',
  severity: 'Severity', subcategory: 'Subcategory', timeline: 'Timeline', trigger_rule: 'Trigger Rule',
  u_announce_on_ivr: 'Announce on IVR', u_call_bridge: 'Call Bridge Information', u_ci_not_found: 'CI not found',
  u_escalated: 'Escalated', u_incident_manager: 'Incident Manager', u_on_behalf_of: 'On Behalf Of',
  u_on_hold_count: 'On Hold Count', u_on_hold_since: 'On Hold Since', u_on_hold_time: 'On Hold Time',
  u_other_configuration_item: 'Other Configuration Item', u_outage_time: 'Outage time',
  u_preferred_contact_phone_number: 'Preferred Contact Phone Number', u_reactivation_date: 'Reactivation Date',
  u_request: 'Request', u_sla_review: 'SLA Review', u_unassigned_since: 'Unassigned since',
  u_unassigned_time: 'Unassigned Time'
};
const CHANGE_REQUEST_FIELD_LABELS = {
  backout_plan: 'Backout plan', cab_date: 'CAB date', cab_date_time: 'CAB date/time', cab_delegate: 'CAB delegate',
  cab_recommendation: 'CAB recommendation', cab_required: 'CAB required', category: 'Category',
  change_plan: 'Change plan', chg_model: 'Model', chg_model_template: 'Change Model Template',
  close_code: 'Close code', conflict_last_run: 'Conflict last run', conflict_status: 'Conflict status',
  copied_from: 'Copied from', end_date: 'Planned end date', exclude_from_conflict_detection: 'Exclude from conflict detection',
  implementation_plan: 'Implementation plan', justification: 'Justification', on_hold: 'On hold',
  on_hold_reason: 'On hold reason', on_hold_task: 'On Hold Change Tasks', outside_maintenance_schedule: 'Outside maintenance schedule',
  phase: 'Phase', phase_state: 'Phase state', production_system: 'Production system', reason: 'Reason',
  requested_by: 'Requested by', requested_by_date: 'Requested by date', review_comments: 'Review comments',
  review_date: 'Review date', review_status: 'Review status', risk: 'Risk', risk_impact_analysis: 'Risk Analysis',
  risk_value: 'Risk value', scope: 'Scope', start_date: 'Planned start date', std_change_producer_version: 'Standard Change Template version',
  test_plan: 'Test Validation Plan', type: 'Type', u_ci_not_found: 'CI not found', u_cmdb_ci_text: 'Other Configuration Item',
  u_emergency_change: 'Emergency Change', u_impact_analysis: 'Impact Analysis', u_impacted_locations: 'Impacted locations',
  u_it_communication_required: 'IT Communication Required', u_post_change_validation_result: 'Post Change Validation Result',
  u_preferred_contact_information: 'Preferred Contact Information', u_requested_for: 'Requested for', unauthorized: 'Unauthorized'
};
const SC_TASK_FIELD_LABELS = {
  cat_item: 'Item', calendar_stc: 'Resolve Time', request: 'Request', request_item: 'Request item',
  sc_catalog: 'Catalog', u_escalated: 'Escalated', u_pending_reason: 'Pending Reason', u_reactivation_date: 'Reactivation Date',
  u_related_story: 'Related Story', u_sla_duration: 'SLA Duration', u_sla_review: 'SLA Review',
  u_unassigned_since: 'Unassigned since', u_unassigned_time: 'Unassigned Time'
};
// Indexed the same way as DEFAULT_FIELD_SETS (problem, rm_story, incident,
// change_request, sc_task).
const DEFAULT_FIELD_LABELS = [
  { ...TASK_FIELD_LABELS, ...PROBLEM_FIELD_LABELS },
  { ...TASK_FIELD_LABELS, ...RM_STORY_FIELD_LABELS },
  { ...TASK_FIELD_LABELS, ...INCIDENT_FIELD_LABELS },
  { ...TASK_FIELD_LABELS, ...CHANGE_REQUEST_FIELD_LABELS },
  { ...TASK_FIELD_LABELS, ...SC_TASK_FIELD_LABELS }
];
