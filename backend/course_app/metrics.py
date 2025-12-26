from prometheus_client import Counter, Histogram

register_requests_total = Counter(
    "register_requests_total",
    "Total register API calls"
)

register_duration_seconds = Histogram(
    "register_duration_seconds",
    "Register API duration"
)