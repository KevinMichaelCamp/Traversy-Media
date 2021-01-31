from .models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer
from django.core.exceptions import PermissionDenied


# Lead Viewsets
class LeadViewSet(viewsets.ModelViewSet):
    permmission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = LeadSerializer

    def get_queryset(self):
        if not self.request.user.is_authenticated:
            raise PermissionDenied()
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
