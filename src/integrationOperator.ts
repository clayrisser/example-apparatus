import { Var } from 'kustomize-operator';
import { Container } from '@kubernetes/client-node';
import { HashMap } from '~/types';

export interface Socket {
  spec?: SocketSpec;
}

export interface Plug {
  spec?: PlugSpec;
}

export interface PlugSpec {
  apparatus?: Apparatus; // *SpecApparatus `json:"apparatus,omitempty"`
  config?: HashMap<string>; // map[string]string `json:"config,omitempty"`
  configConfigMapName?: string; // string `json:"configConfigMapName,omitempty"`
  configMapper?: HashMap<string>; // map[string]string `json:"configMapper,omitempty"`
  configSecretName?: string; // string `json:"configSecretName,omitempty"`
  data?: HashMap<string>; // map[string]string `json:"data,omitempty"`
  dataConfigMapName?: string; // string `json:"dataConfigMapName,omitempty"`
  dataSecretName?: string; // string `json:"dataSecretName,omitempty"`
  interface?: NamespacedName; // NamespacedName `json:"interface,omitempty"`
  interfaceVersions?: string; // string `json:"interfaceVersions,omitempty"`
  namespaceScope?: string; // string `json:"namespaceScope,omitempty"`
  resources?: Resource[]; // []*Resource `json:"resources,omitempty"`
  socket?: NamespacedName; // NamespacedName `json:"socket,omitempty"`
  vars?: Var[]; // []kustomizeTypes.Var `json:"vars,omitempty" yaml:"vars,omitempty"`
}

export interface SocketSpec {
  apparatus?: SpecApparatus; // *SpecApparatus `json:"apparatus,omitempty"`
  config?: HashMap<string>; // map[string]string `json:"config,omitempty"`
  configConfigMapName?: string; // string `json:"configConfigMapName,omitempty"`
  configMapper?: HashMap<string>; // map[string]string `json:"configMapper,omitempty"`
  configSecretName?: string; // string `json:"configSecretName,omitempty"`
  data?: HashMap<string>; // map[string]string `json:"data,omitempty"`
  dataConfigMapName?: string; // string `json:"dataConfigMapName,omitempty"`
  dataSecretName?: string; // string `json:"dataSecretName,omitempty"`
  interface?: NamespacedName; // NamespacedName `json:"interface,omitempty"`
  interfaceVersions?: string; // string `json:"interfaceVersions,omitempty"`
  namespaceScope?: string; // string `json:"namespaceScope,omitempty"`
  resources?: Resource[]; // []*Resource `json:"resources,omitempty"`
  vars?: Var[]; // []kustomizeTypes.Var `json:"vars,omitempty" yaml:"vars,omitempty"`
}

export interface Apparatus {
  containers?: Container[]; // []*v1.Container `json:"containers,omitempty"`
  endpoint?: string; // string `json:"endpoint,omitempty"`
}

export interface NamespacedName {
  name?: string; // string `json:"name"`
  namespace?: string; // string `json:"namespace,omitempty"`
}

export interface Resource {
  do?: Do; // Do `json:"do,omitempty"`
  resource?: string; // string `json:"resource,omitempty"`
  when?: When; // When `json:"when,omitempty"`
}

export enum Do {}

export enum When {}
